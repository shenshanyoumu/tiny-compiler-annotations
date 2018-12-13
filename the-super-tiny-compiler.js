"use strict";

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 基于JS编写的几乎涵盖所有现代编译器特性的极简编译器版本。
 * 这款编译器设计一种类lisp语法的编程语言，然后转换为类C的目标语言
 *
 * 下面就是两种语言定义函数的语法结构
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 绝大多数编译器的工作流程分为三阶段：词法/语法的分析、AST语法树的转换，以及目标代码生成
 * （1）词法/语法分析
 *   前端开发中，不论Babel还是webpack都可以理解为一种类编译器工具，都具有强大的词法/语法分析能力
 *
 *  第一步：词法分析
 *    输入为原始代码，词法分析即将原代码拆分为一系列tokens，tokens是具有含义的最小单位；
 *  [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 *  第二步：语法分析
 *    语法分析将tokens按照语法含义重组，这也称为AST的中间表示。
 *    下面的AST结构即对上面类Lisp语言函数的表示
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 *
 *
 * （2）AST结构转化
 *   遍历该AST数据结构，完成一些结构的重构工作。针对该AST数据结构，我们可以增加/删除/替换一些属性，
 *   甚至可以基于该AST创建新的AST。一般AST为树形结构，因此需要根据遍历树的方式来遍历该AST结构。
 *   前端领域，大量基于Babel/webpack插件实现的功能就是根据AST的节点类型进行相应处理。
 *   可以参考[!babel-plugin-import(https://github.com/ant-design/babel-plugin-import)]
 *
 *  下面遍历AST的visitor对象，其实就是Babel的插件。注意插件在访问每个AST的节点时都设置一些钩子来精细控制
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 *
 * （3）目标代码生成
 *   将经过转换的AST抽象语法树按照一定的遍历顺序转化为目标代码，其主要操作即将AST的树形结构转换为字符串形式输出。
 *
 */

/**
 


/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                  词法解析器
 * ============================================================================
 */

/**
 * 根据语言的结构规则，解析源代码输出一系列Tokens
 * @param {*} input 输入为源代码字符串
 */
function tokenizer(input) {
  let current = 0;
  let tokens = [];

  // 逐字符遍历源代码字符串，根据语言结构解析出token
  while (current < input.length) {
    let char = input[current];

    // 左括弧在几乎任何编程语言中都是一个独立的token
    if (char === "(") {
      tokens.push({
        type: "paren",
        value: "("
      });
      current++;
      continue;
    }

    // 右括弧与左括弧同理
    if (char === ")") {
      tokens.push({
        type: "paren",
        value: ")"
      });
      current++;
      continue;
    }

    // 请注意：空格在大多数语言中没有语义信息，但是在python等语言具有语义信息。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 将连续的数字字符作为一个整体构成单一的token
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {
      let value = "";

      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: "number", value });
      continue;
    }

    // 双引号包裹的字符作为字符串存储
    if (char === '"') {
      let value = "";
      char = input[++current];

      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];
      tokens.push({ type: "string", value });

      continue;
    }

    // 解析变量，由于现代计算机系统的设计哲学。变量充当真实内存地址的引用
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = "";

      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      tokens.push({ type: "name", value });
      continue;
    }

    //  由于项目实现的编译器很简单，因此不考虑其他语言规则
    throw new TypeError("I dont know what this character is: " + char);
  }

  //  返回解析得到的tokens列表
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                   语法解析器
 * ============================================================================
 */

/**
 * 根据词法信息分析构造AST中间表示
 * 词法并不能构成语言本身。与人类语言类似，计算机编程语言也具有语义信息
 * @param {*} tokens 语言的词法列表
 */
function parser(tokens) {
  let current = 0;

  function walk() {
    let token = tokens[current];

    // 构造数字类型的AST节点结构
    if (token.type === "number") {
      current++;

      return {
        type: "NumberLiteral",
        value: token.value
      };
    }

    // 构造字符串类型的AST节点结构
    if (token.type === "string") {
      current++;

      return {
        type: "StringLiteral",
        value: token.value
      };
    }

    //当出现左括弧，则贪婪遍历直到出现第一个右括弧为止。此过程主要是解析函数名称和函数参数
    if (token.type === "paren" && token.value === "(") {
      token = tokens[++current];

      // 编译器与编程语言一一对应，因此项目中定义的类Lisp语言中
      // 当出现左括弧，则后面紧跟的token即为函数名称
      let node = {
        type: "CallExpression",
        name: token.value,
        params: []
      };

      token = tokens[++current];

      // 很显然根据上面定义的类Lisp语法特性，函数名称后面和右括弧前面的token都是函数参数
      while (
        token.type !== "paren" ||
        (token.type === "paren" && token.value !== ")")
      ) {
        node.params.push(walk());
        token = tokens[current];
      }

      current++;
      return node;
    }

    // 类Lisp语言很简单，不接受其他类型的AST节点类型
    throw new TypeError(token.type);
  }

  // 构建的AST树形结构的入口
  let ast = {
    type: "Program",
    body: []
  };

  // 根据词法token列表，结合语义信息构造AST结构
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                                遍历AST抽象语法树
 * ============================================================================
 */

/**
 * 对AST遍历，并对不同的节点类型调用不同的处理函数处理
 * @param {*} ast 经过语法分析后构建的AST树形结构
 * @param {*} visitor 节点遍历器对象，其实Babel插件的编写就是编写节点遍历器对象
 */
function traverser(ast, visitor) {
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // 当遍历器遍历到AST树形结构中给定的节点时，调用下面函数
  // 遍历器对象可以具有大量的方法来处理不同类型的节点；当然也可以只有一个方法，来处理特定的节点类型
  function traverseNode(node, parent) {
    let methods = visitor[node.type];

    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // 根据AST树节点类型进行处理
    switch (node.type) {
      case "Program":
        traverseArray(node.body, node);
        break;

      case "CallExpression":
        traverseArray(node.params, node);
        break;

      case "NumberLiteral":
      case "StringLiteral":
        break;

      default:
        throw new TypeError(node.type);
    }

    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 遍历整棵树
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              AST抽象语法树的转换器
 * ============================================================================
 */

/**
 * 将AST结构经过一定规则进行转换处理，一般Babel/webpack插件在这个过程起作用
 * @param {*} ast 经过语法分析得到的AST结构
 */
function transformer(ast) {
  let newAst = {
    type: "Program",
    body: []
  };

  ast._context = newAst.body;

  // 注意下面traverser函数执行中，对于函数表达式节点会创建新的context
  traverser(ast, {
    //  visitor对象具备的一系列方法用于处理不同的AST节点
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: "NumberLiteral",
          value: node.value
        });
      }
    },

    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: "StringLiteral",
          value: node.value
        });
      }
    },

    // 当AST某个节点为函数表达式时，则需要记录函数名称以及相应的调用参数
    CallExpression: {
      enter(node, parent) {
        let expression = {
          type: "CallExpression",
          callee: {
            type: "Identifier",
            name: node.name
          },
          arguments: []
        };

        // 当节点类型为函数表达式，则其参数列表存放在节点的context上
        node._context = expression.arguments;
        if (parent.type !== "CallExpression") {
          expression = {
            type: "ExpressionStatement",
            expression: expression
          };
        }

        parent._context.push(expression);
      }
    }
  });

  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                                目标代码生成
 * ============================================================================
 */

function codeGenerator(node) {
  switch (node.type) {
    // Program节点为整棵树的根节点，本身并不会参与程序的语义计算过程。其body属性存储的才是真正有效的结构
    case "Program":
      return node.body.map(codeGenerator).join("\n");

    // 这是类C语言的表达式语法形式节点
    case "ExpressionStatement":
      return (
        codeGenerator(node.expression) + ";" // << (...because we like to code the *correct* way)
      );

    //  这是类C语言的函数调用形式节点，注意节点的callee属性存储了函数名称；而arguments属性为函数参数
    case "CallExpression":
      return (
        codeGenerator(node.callee) +
        "(" +
        node.arguments.map(codeGenerator).join(", ") +
        ")"
      );

    case "Identifier":
      return node.name;

    case "NumberLiteral":
      return node.value;

    case "StringLiteral":
      return '"' + node.value + '"';

    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                                完整的编译器结构
 * ============================================================================
 */

/**
 * 经过编译处理后的目标代码
 * @param {*} input 源代码
 */
function compiler(input) {
  // 经过词法分析、语法分析生成AST结构，然后在AST结构基础上进行遍历处理。最后生成目标代码字符串
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // and simply return the output!
  return output;
}

module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler
};
