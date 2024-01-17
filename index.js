import express, { Router } from "express";
import fs from "fs";

const app = express();
const router = express.Router();
import cors from "cors";

router.get("/api/initial-script", async (req, res, next) => {
	try {
		const js = fs.readFileSync("pocFive.html");

		res.setHeader("Content-Type", "text/html");
		res.write(js);
		res.statusCode = 200;

		res.end();
	} catch (err) {
		console.error(err);
	}
});

router.post("/api/date-range", async (req, res, next) => {
	try {
		const jsonResponse = {
			instance: true,
			data: [
				{
					label: "Was performed",
					value: true,
					name: "_ctl0:Content:R:field736531:736531_CRFControl:736531_CRFControl_RadioBtnList",
				},
				{
					label: "Was performed",
					value: false,
					name: "_ctl0:Content:R:field736531:736531_CRFControl:736531_CRFControl_RadioBtnList",
				},
				{
					label: "Date of exam",
					value: 13,
					name: "_ctl0:Content:R:field736526:736526_CRFControl:736526_CRFControl_0",
				},
			],
		};

		const body = req.body;
		console.log(body, { depth: 10 });
		res.json(jsonResponse);
	} catch (err) {
		console.error(err);
	}
});

router.post("/api/submit-form", async (req, res, next) => {
	try {
		console.log(req.body);

		res.json("good job");
	} catch (err) {
		console.error("err :", err);
	}
});

router.get("/api/help", async (req, res, next) => {
	try {
		const json_response = {
			status: "success",
			previousData: true,
			data: [
				{
					exists: "true",
					prevVal: "something",
				},
				{
					exists: "true",
					prevVal: "something",
				},
				{
					exists: "true",
					prevVal: "something",
				},
			],
		};
		// console.log("we got hit");
		res.json(json_response);
	} catch (err) {
		console.error(err);
	}
});

app.use(cors("*"));

app.use(express.json());

app.use("/", router);

app.listen(3003, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("You are listening on port 3003");
	}
});
