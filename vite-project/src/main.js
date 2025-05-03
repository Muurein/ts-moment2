"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
require("./styles.css");
var typescript_svg_1 = require("./typescript.svg");
var vite_svg_1 = require("/vite.svg");
var counter_ts_1 = require("./counter.ts");
document.querySelector('#app').innerHTML = "\n  <div>\n    <a href=\"https://vite.dev\" target=\"_blank\">\n      <img src=\"".concat(vite_svg_1.default, "\" class=\"logo\" alt=\"Vite logo\" />\n    </a>\n    <a href=\"https://www.typescriptlang.org/\" target=\"_blank\">\n      <img src=\"").concat(typescript_svg_1.default, "\" class=\"logo vanilla\" alt=\"TypeScript logo\" />\n    </a>\n    <h1>Vite + TypeScript</h1>\n    <div class=\"card\">\n      <button id=\"counter\" type=\"button\"></button>\n    </div>\n    <p class=\"read-the-docs\">\n      Click on the Vite and TypeScript logos to learn more\n    </p>\n  </div>\n");
(0, counter_ts_1.setupCounter)(document.querySelector('#counter'));
var TodoList = /** @class */ (function () {
    function TodoList(task, completed, priority, todos) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
        this.todos = todos;
        //ska init todos-arrayen SAMT ladda todos från localStorage vid skapandet av ett nytt TodoList-objekt
    }
    TodoList.prototype.addToDo = function (task, priority) {
        if (this.task && this.priority === undefined) { /* vad ska jag använda istället? */
            return false;
        }
        else {
            return true;
        }
    };
    ;
    TodoList.prototype.markToDoCompleted = function (todoIndex) {
        console.log("Metod för att markera todos som klara");
    };
    TodoList.prototype.getTodos = function () {
        console.log("Metod för för att hämta hela listan av todos");
    };
    TodoList.prototype.savetoLocalStorage = function () {
        console.log("Metod för att spara todos till localStorage");
    };
    TodoList.prototype.loadFromLocalStorage = function () {
        console.log("Metod för att hämta todos från localStorage");
    };
    return TodoList;
}());
exports.TodoList = TodoList;
