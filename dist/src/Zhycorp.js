"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZhycorpWrapper = void 0;
const superagent_1 = require("superagent");
const Bot_1 = require("./Bot");
class ZhycorpWrapper {
    constructor() {
        this.baseURL = "https://bot.zhycorp.xyz";
    }
    getBot(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const USER_PATTERN = /\d{17,19}/g;
            if (!USER_PATTERN.test(id))
                throw Error("Invalid user id!");
            const { body: result } = yield superagent_1.get(this.baseURL);
            if (!result[id])
                throw Error("Not Found");
            const bot = result[id];
            const user = yield Bot_1.getOwner(id);
            return {
                botID: bot.botID,
                owner: {
                    userID: bot.ownerID,
                    userTag: user
                },
                prefix: bot.prefix,
                approved: bot.approved ? "yes" : "no",
                regis: bot.registered ? "yes" : "no"
            };
        });
    }
}
exports.ZhycorpWrapper = ZhycorpWrapper;
//# sourceMappingURL=Zhycorp.js.map