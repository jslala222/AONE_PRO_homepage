/**
 * ESLint 규칙: 한국어 주석 필수
 * 작성자: AONE_PRO
 * 설명: 모든 함수, 변수, 컴포넌트에 한국어 주석을 달도록 강제합니다.
 */

module.exports = {
  meta: {
    name: 'require-korean-comment',
    version: '1.0.0',
    description: '모든 함수, 변수, 컴포넌트에 한국어 주석을 필수로 달도록 합니다.',
    docs: {
      description: '코드 요소에 한국어 주석이 있는지 검사합니다.'
    },
    messages: {
      missingComment: '이 코드에 한국어 주석이 없습니다. 모든 함수와 변수에 한국어 주석을 달아주세요.'
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          types: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['function', 'variable', 'class', 'interface', 'type']
            },
            default: ['function', 'variable', 'class', 'interface', 'type']
          }
        }
      }
    ]
  },

  create(context) {
    // 코멘트가 Korean 문자를 포함하는지 확인
    const hasKoreanComment = (comments) => {
      if (!comments || comments.length === 0) return false;
      const koreanRegex = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/;
      return comments.some(comment => koreanRegex.test(comment.value));
    };

    // 이전 노드의 주석을 가져오는 헬퍼 함수
    const getLeadingComments = (node) => {
      const sourceCode = context.getSourceCode();
      return sourceCode.getCommentsBefore(node);
    };

    // 노드의 이름 가져오기
    const getNodeName = (node) => {
      if (node.id && node.id.name) return node.id.name;
      if (node.key && node.key.name) return node.key.name;
      if (node.declarations) {
        for (const decl of node.declarations) {
          if (decl.id && decl.id.name) return decl.id.name;
        }
      }
      return '알 수 없는 이름';
    };

    return {
      // 함수 선언 검사
      FunctionDeclaration(node) {
        // 익명 함수 스킵 (익스포트된 화살표 함수 등)
        if (!node.id) return;
        
        const comments = getLeadingComments(node);
        if (!hasKoreanComment(comments)) {
          context.report({
            node,
            messageId: 'missingComment',
            data: { name: node.id.name }
          });
        }
      },

      // 화살표 함수 검사
      ArrowFunctionExpression(node) {
        // 변수에 할당된 화살표 함수만 검사
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
              messageId: 'missingComment'
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
              messageId: 'missingComment'
            });
          }
        }
      },

      // 변수 선언 검사 (함수형이 아닌 일반 변수)
      VariableDeclaration(node) {
        for (const decl of node.declarations) {
          if (decl.id && decl.id.name) {
            // 이미 함수/클래스로 분류된 것은 제외
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
                messageId: 'missingComment'
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
            messageId: 'missingComment'
          });
        }
      },

      // JSX 컴포넌트 검사 (React)
      'FunctionDeclaration[parent.type="ExportDefaultDeclaration"]'(node) {
        const comments = getLeadingComments(node);
        if (!hasKoreanComment(comments)) {
          context.report({
            node,
            messageId: 'missingComment'
          });
        }
      },

      // Export default 된 함수/변수 검사
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
              messageId: 'missingComment'
            });
          }
        }
      },

      // 인터페이스 선언 검사 (TypeScript)
      TSInterfaceDeclaration(node) {
        const comments = getLeadingComments(node);
        if (!hasKoreanComment(comments)) {
          context.report({
            node,
            messageId: 'missingComment'
          });
        }
      },

      // 타입 별칭 선언 검사 (TypeScript)
      TSTypeAliasDeclaration(node) {
        const comments = getLeadingComments(node);
        if (!hasKoreanComment(comments)) {
          context.report({
            node,
            messageId: 'missingComment'
          });
        }
      },

      // TypeScript 함수/메서드 검사
      TSMethodSignature(node) {
        const comments = getLeadingComments(node);
        if (!hasKoreanComment(comments)) {
          context.report({
            node,
            messageId: 'missingComment'
          });
        }
      },

      // TypeScript 클래스 메서드
      MethodDefinition(node) {
        if (node.kind === 'constructor') return;
        
        const comments = getLeadingComments(node);
        if (!hasKoreanComment(comments)) {
          context.report({
            node,
            messageId: 'missingComment'
          });
        }
      }
    };
  }
};
