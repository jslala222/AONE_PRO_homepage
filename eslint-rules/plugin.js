/**
 * ESLint 커스텀 플러그인: no-chinese
 * 설명: 코드에서 중국어 문자 사용을 감지하여 한국어 사용을 유도합니다.
 * 
 * 사용법:
 * 1. ESLint 설정에서 plugins에 "no-chinese" 추가
 * 2. rules에서 "no-chinese/no-chinese": "error" 설정
 */

const noChinese = require('./no-chinese');

module.exports = {
  rules: {
    'no-chinese': noChinese
  },
  configs: {
    recommended: {
      plugins: {
        'no-chinese': {
          rules: {
            'no-chinese/no-chinese': 'error'
          }
        }
      },
      rules: {
        'no-chinese/no-chinese': ['error', { ignoreComments: false }]
      }
    }
  }
};
