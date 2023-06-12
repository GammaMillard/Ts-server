"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const Port = process.env.PORT || 8002;
app.get("/api", (req, res) => {
    res.json({ msg: 'Api' });
});
app.get("/api/student", (req, res) => {
    res.json({ msg: 'Students' });
});
app.listen(Port, () => {
    console.log('Holaa');
});
