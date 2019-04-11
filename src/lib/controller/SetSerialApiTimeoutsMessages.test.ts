import {
	FunctionType,
	MessagePriority,
	MessageType,
} from "../message/Constants";
import {
	getDefaultPriority,
	getDefaultPriorityStatic,
	getExpectedResponse,
	getExpectedResponseStatic,
	getFunctionType,
	getFunctionTypeStatic,
	getMessageType,
	getMessageTypeStatic,
	Message,
} from "../message/Message";
import {
	SetSerialApiTimeoutsRequest,
	SetSerialApiTimeoutsResponse,
} from "./SetSerialApiTimeoutsMessages";

describe("lib/controller/SetSerialApiTimeoutsRequest => ", () => {
	const req = new SetSerialApiTimeoutsRequest(undefined);

	it("should be a Message", () => {
		expect(req).toBeInstanceOf(Message);
	});
	it("with type Request", () => {
		expect(getMessageType(req)).toBe(MessageType.Request);
		expect(getMessageTypeStatic(SetSerialApiTimeoutsRequest)).toBe(
			MessageType.Request,
		);
	});
	it("and priority Controller", () => {
		expect(getDefaultPriority(req)).toBe(MessagePriority.Controller);
		expect(getDefaultPriorityStatic(SetSerialApiTimeoutsRequest)).toBe(
			MessagePriority.Controller,
		);
	});
	it("and a function type SetSerialApiTimeouts", () => {
		expect(getFunctionType(req)).toBe(FunctionType.SetSerialApiTimeouts);
		expect(getFunctionTypeStatic(SetSerialApiTimeoutsRequest)).toBe(
			FunctionType.SetSerialApiTimeouts,
		);
	});
	it("that expects a SetSerialApiTimeouts response", () => {
		expect(getExpectedResponse(req)).toBe(
			FunctionType.SetSerialApiTimeouts,
		);
		expect(getExpectedResponseStatic(SetSerialApiTimeoutsRequest)).toBe(
			FunctionType.SetSerialApiTimeouts,
		);
	});

	it.todo("Test serialization");
});

describe("lib/controller/SetSerialApiTimeoutsResponse => ", () => {
	const res = new SetSerialApiTimeoutsResponse(undefined);

	it("should be a Message", () => {
		expect(res).toBeInstanceOf(Message);
	});
	it("with type Response", () => {
		expect(getMessageType(res)).toBe(MessageType.Response);
		expect(getMessageTypeStatic(SetSerialApiTimeoutsResponse)).toBe(
			MessageType.Response,
		);
	});
	it("and NO default priority", () => {
		expect(getDefaultPriority(res)).toBeUndefined();
		expect(
			getDefaultPriorityStatic(SetSerialApiTimeoutsResponse),
		).toBeUndefined();
	});
	it("and a function type SetSerialApiTimeouts", () => {
		expect(getFunctionType(res)).toBe(FunctionType.SetSerialApiTimeouts);
		expect(getFunctionTypeStatic(SetSerialApiTimeoutsResponse)).toBe(
			FunctionType.SetSerialApiTimeouts,
		);
	});
	it("that expects NO response", () => {
		expect(getExpectedResponse(res)).toBeUndefined();
		expect(
			getExpectedResponseStatic(SetSerialApiTimeoutsResponse),
		).toBeUndefined();
	});

	it.todo("TODO: Test deserialization");
});
