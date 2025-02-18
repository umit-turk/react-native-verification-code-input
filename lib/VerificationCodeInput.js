"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var VerificationCodeInput = function (_a) {
    var _b = _a.length, length = _b === void 0 ? 6 : _b, onComplete = _a.onComplete, _c = _a.autoFocus, autoFocus = _c === void 0 ? true : _c, _d = _a.error, error = _d === void 0 ? false : _d, containerStyle = _a.containerStyle, inputStyle = _a.inputStyle, textStyle = _a.textStyle, _e = _a.errorColor, errorColor = _e === void 0 ? '#FF3B30' : _e, _f = _a.borderColor, borderColor = _f === void 0 ? '#E5E5E5' : _f, _g = _a.activeBorderColor, activeBorderColor = _g === void 0 ? '#007AFF' : _g, _h = _a.inputSize, inputSize = _h === void 0 ? 45 : _h, _j = _a.inputPadding, inputPadding = _j === void 0 ? 10 : _j, _k = _a.keyboardType, keyboardType = _k === void 0 ? 'numeric' : _k;
    var _l = (0, react_1.useState)(Array(length).fill('')), code = _l[0], setCode = _l[1];
    var _m = (0, react_1.useState)(0), focusedIndex = _m[0], setFocusedIndex = _m[1];
    var inputRefs = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(function () {
        if (autoFocus && inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);
    var handleChange = function (text, index) {
        var _a, _b;
        // Handle paste or autofill
        if (text.length > 1) {
            var codeArray = text.split('').slice(0, length);
            setCode(codeArray.concat(Array(length - codeArray.length).fill('')));
            onComplete === null || onComplete === void 0 ? void 0 : onComplete(codeArray.join(''));
            (_a = inputRefs.current[Math.min(codeArray.length, length - 1)]) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
        var newCode = __spreadArray([], code, true);
        newCode[index] = text;
        setCode(newCode);
        if (text !== '') {
            if (index < length - 1) {
                (_b = inputRefs.current[index + 1]) === null || _b === void 0 ? void 0 : _b.focus();
            }
            if (index === length - 1) {
                onComplete === null || onComplete === void 0 ? void 0 : onComplete(newCode.join(''));
            }
        }
    };
    var handleKeyPress = function (event, index) {
        var _a;
        var key = event.nativeEvent.key;
        if (key === 'Backspace' && index > 0 && code[index] === '') {
            (_a = inputRefs.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
            var newCode = __spreadArray([], code, true);
            newCode[index - 1] = '';
            setCode(newCode);
        }
    };
    var handleFocus = function (index) {
        setFocusedIndex(index);
    };
    return (<react_native_1.View style={[styles.container, containerStyle]}>
      {Array(length)
            .fill(0)
            .map(function (_, index) { return (<react_native_1.TextInput key={index} ref={function (ref) { return (inputRefs.current[index] = ref); }} style={[
                styles.input,
                {
                    width: inputSize,
                    height: inputSize,
                    padding: inputPadding,
                    borderColor: error
                        ? errorColor
                        : focusedIndex === index
                            ? activeBorderColor
                            : borderColor,
                },
                inputStyle,
                textStyle,
            ]} maxLength={index === 0 ? length : 1} keyboardType={keyboardType} value={code[index]} onChangeText={function (text) { return handleChange(text, index); }} onKeyPress={function (event) { return handleKeyPress(event, index); }} onFocus={function () { return handleFocus(index); }} textContentType={react_native_1.Platform.OS === 'ios' ? 'oneTimeCode' : undefined} autoComplete={react_native_1.Platform.OS === 'android' ? 'sms-otp' : 'off'} importantForAutofill="yes"/>); })}
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
    },
});
exports.default = VerificationCodeInput;
