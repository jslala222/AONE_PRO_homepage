/**
 * ESLint 설정 파일
 * 설명: AONE_PRO 프로젝트 코드 규칙
 * 
 * 규칙:
 * 1. 모든 설명은 한국어로 작성
 * 2. 중국어 문자 발견 시 한국어로 수정 요청
 * 3. 모든 함수/변수/컴포넌트에 한국어 주석 필수
 */

const path = require('path');

// 커스텀 규칙 로드
const noChinese = require('./eslint-rules/no-chinese');
const requireKoreanComment = require('./eslint-rules/require-korean-comment');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // ========================================
    // 커스텀 규칙 1: 중국어 문자 검출 방지
    // ========================================
    'no-chinese/no-chinese': 'error',

    // ========================================
    // 커스텀 규칙 2: 한국어 주석 필수
    // ========================================
    'require-korean-comment/require-korean-comment': 'error',

    // ========================================
    // 기본 규칙
    // ========================================
    'no-console': 'warn',  // console 사용 시 경고
    'react-hooks/rules-of-hooks': 'error',  // Hook 규칙 강제
    'react-hooks/exhaustive-deps': 'warn',  // useEffect 의존성 경고
  },
  // 커스텀 규칙 정의
  rulesMeta: {
    // ========================================
    // 중국어 검출 규칙
    // ========================================
    'no-chinese/no-chinese': {
      meta: noChinese.meta,
      create(context) {
        // 중국어 문자 범위 (CJK 통합 한자)
        const chineseRegex = /[\u4e00-\u9fff]/g;

        return {
          // 문자열 리터럴 검사
          Literal(node) {
            if (typeof node.value === 'string' && chineseRegex.test(node.value)) {
              context.report({
                node,
                message: '중국어 문자가 발견되었습니다. 한국어로 수정해주세요.'
              });
            }
          },

          // JSX 텍스트 검사
          JSXText(node) {
            if (typeof node.value === 'string' && chineseRegex.test(node.value)) {
              context.report({
                node,
                message: 'JSX에서 중국어 문자가 발견되었습니다. 한국어로 수정해주세요.'
              });
            }
          },

          // JSX 표현식 컨테이너 검사
          JSXExpressionContainer(node) {
            if (node.expression && node.expression.type === 'Literal') {
              if (typeof node.expression.value === 'string' && chineseRegex.test(node.expression.value)) {
                context.report({
                  node: node.expression,
                  message: 'JSX 표현식에서 중국어 문자가 발견되었습니다. 한국어로 수정해주세요.'
                });
              }
            }
          },

          // 템플릿 리터럴 검사
          TemplateLiteral(node) {
            node.quasis.forEach((quasi) => {
              if (chineseRegex.test(quasi.value.raw)) {
                context.report({
                  node: quasi,
                  message: '템플릿 리터럴에서 중국어 문자가 발견되었습니다. 한국어로 수정해주세요.'
                });
              }
            });
          },

          // 주석 검사
          BlockComment(node) {
            if (chineseRegex.test(node.value)) {
              context.report({
                node,
                message: '주석에서 중국어 문자가 발견되었습니다. 한국어로 수정해주세요.'
              });
            }
          },

          LineComment(node) {
            if (chineseRegex.test(node.value)) {
              context.report({
                node,
                message: '주석에서 중국어 문자가 발견되었습니다. 한국어로 수정해주세요.'
              });
            }
          }
        };
      }
    },

    // ========================================
    // 한국어 주석 필수 규칙
    // ========================================
    'require-korean-comment/require-korean-comment': {
      meta: requireKoreanComment.meta,
      create(context) {
        // 한국어 문자 범위 확인
        const koreanRegex = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/;
        
        // 이전 노드의 주석 가져오기
        const getLeadingComments = (node) => {
          const sourceCode = context.getSourceCode();
          return sourceCode.getCommentsBefore(node);
        };

        // 주석에 한국어가 있는지 확인
        const hasKoreanComment = (comments) => {
          if (!comments || comments.length === 0) return false;
          return comments.some(comment => koreanRegex.test(comment.value));
        };

        // 검사 대상 타입
        const targetTypes = ['function', 'variable', 'class', 'interface', 'type'];

        return {
          // 함수 선언 검사
          FunctionDeclaration(node) {
            if (!node.id) return;
            const comments = getLeadingComments(node);
            if (!hasKoreanComment(comments)) {
              context.report({
                node,
                messageId: 'missingComment',
                message: `함수 '${node.id.name}'에 한국어 주석이 없습니다. 모든 함수에 한국어 주석을 달아주세요.`
              });
            }
          },

          // 화살표 함수 검사 (변수에 할당된 경우)
          ArrowFunctionExpression(node) {
            const parent = node.parent;
            if (
              parent &&
              parent.type === 'VariableDeclarator' &&
              parent.id &&
              parent.id.name
            ) {
              const comments = getLeadingComments(node);
              if (!hasKoreanComment(comments)) {
                context.report({
                  node,
                  messageId: 'missingComment',
                  message: `화살표 함수 '${parent.id.name}'에 한국어 주석이 없습니다. 한국어 주석을 달아주세요.`
                });
              }
            }
          },

          // 함수 표현식 검사
          FunctionExpression(node) {
            const parent = node.parent;
            if (
              parent &&
              parent.type === 'VariableDeclarator' &&
              parent.id &&
              parent.id.name
            ) {
              const comments = getLeadingComments(node);
              if (!hasKoreanComment(comments)) {
                context.report({
                  node,
                  messageId: 'missingComment',
                  message: `함수 '${parent.id.name}'에 한국어 주석이 없습니다. 한국어 주석을 달아주세요.`
                });
              }
            }
          },

          // 변수 선언 검사
          VariableDeclaration(node) {
            for (const decl of node.declarations) {
              if (decl.id && decl.id.name) {
                // 함수/화살표 함수는 위에서 처리했으므로 제외
                if (
                  decl.init &&
                  (decl.init.type === 'FunctionExpression' ||
                    decl.init.type === 'ArrowFunctionExpression')
                ) {
                  continue;
                }

                const comments = getLeadingComments(decl);
                if (!hasKoreanComment(comments)) {
                  context.report({
                    node: decl,
                    messageId: 'missingComment',
                    message: `변수 '${decl.id.name}'에 한국어 주석이 없습니다. 모든 변수에 한국어 주석을 달아주세요.`
                  });
                }
              }
            }
          },

          // 클래스 선언 검사
          ClassDeclaration(node) {
            if (!node.id) return;
            const comments = getLeadingComments(node);
            if (!hasKoreanComment(comments)) {
              context.report({
                node,
                messageId: 'missingComment',
                message: `클래스 '${node.id.name}'에 한국어 주석이 없습니다. 한국어 주석을 달아주세요.`
              });
            }
          },

          // Export default 검사
          ExportDefaultDeclaration(node) {
            const declaration = node.declaration;
            if (
              declaration &&
              (declaration.type === 'FunctionDeclaration' ||
                declaration.type === 'ClassDeclaration' ||
                declaration.type === 'VariableDeclaration')
            ) {
              const comments = getLeadingComments(declaration);
              if (!hasKoreanComment(comments)) {
                context.report({
                  node: declaration,
                  messageId: 'missingComment',
                  message: 'エクス포트された要素에 한국어 주석이 없습니다. 한국어 주석을 달아주세요.'
                });
              }
            }
          },

          // TypeScript 인터페이스 검사
          TSInterfaceDeclaration(node) {
            const comments = getLeadingComments(node);
            if (!hasKoreanComment(comments)) {
              context.report({
                node,
                messageId: 'missingComment',
                message: `인터페이스 '${node.id.name}'에 한국어 주석이 없습니다. 한국어 주석을 달아주세요.`
              });
            }
          },

          // TypeScript 타입 별칭 검사
          TSTypeAliasDeclaration(node) {
            const comments = getLeadingComments(node);
            if (!hasKoreanComment(comments)) {
              context.report({
                node,
                messageId: 'missingComment',
                message: `타입 '${node.id.name}'에 한국어 주석이 없습니다. 한국어 주석을 달아주세요.`
              });
            }
          },

          // TypeScript 클래스 메서드 검사
          MethodDefinition(node) {
            if (node.kind === 'constructor') return;
            const comments = getLeadingComments(node);
            if (!hasKoreanComment(comments)) {
              context.report({
                node,
                messageId: 'missingComment',
                message: `메서드 '${node.key.name}'에 한국어 주석이 없습니다. 한국어 주석을 달아주세요.`
              });
            }
          }
        };
      }
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
