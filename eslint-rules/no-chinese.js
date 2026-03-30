/**
 * ESLint 규칙: 중국어 문자 검출 방지
 * 작성자: AONE_PRO
 * 설명: 코드에서 중국어 문자가 발견되면 경고/에러를 발생시킵니다.
 */

module.exports = {
  meta: {
    name: 'no-chinese',
    version: '1.0.0',
    description: '코드에서 중국어 문자 사용을 금지합니다. (Korean: 코드에서 중국어 문자 사용을 금지합니다.)',
    docs: {
      description: '중국어 문자가 코드에 포함되어 있는지 검사합니다.'
    },
    messages: {
      chineseDetected: '중국어 문자가 발견되었습니다. 한국어로 수정해주세요. (Chinese text detected. Please change to Korean.)'
    },
    fixable: null,
    schema: []
  },

  create(context) {
    // 중국어 문자 범위 (CJK 통합 한자)
    const chineseRegex = /[\u4e00-\u9fff]/g;

    return {
      // 문자열 리터럴 검사
      Literal(node) {
        if (typeof node.value === 'string' && chineseRegex.test(node.value)) {
          context.report({
            node,
            messageId: 'chineseDetected'
          });
        }
      },

      // JSX 텍스트 검사
      JSXText(node) {
        if (typeof node.value === 'string' && chineseRegex.test(node.value)) {
          context.report({
            node,
            messageId: 'chineseDetected'
          });
        }
      },

      // JSX 텍스트 내부의 표현식 검사
      JSXExpressionContainer(node) {
        if (
          node.expression &&
          node.expression.type === 'Literal' &&
          typeof node.expression.value === 'string' &&
          chineseRegex.test(node.expression.value)
        ) {
          context.report({
            node: node.expression,
            messageId: 'chineseDetected'
          });
        }
      },

      // 템플릿 리터럴 검사
      TemplateLiteral(node) {
        node.quasis.forEach((quasi) => {
          if (chineseRegex.test(quasi.value.raw)) {
            context.report({
              node: quasi,
              messageId: 'chineseDetected'
            });
          }
        });
      },

      // 주석 검사
      BlockComment(node) {
        if (chineseRegex.test(node.value)) {
          context.report({
            node,
            messageId: 'chineseDetected'
          });
        }
      },

      LineComment(node) {
        if (chineseRegex.test(node.value)) {
          context.report({
            node,
            messageId: 'chineseDetected'
          });
        }
      }
    };
  }
};
