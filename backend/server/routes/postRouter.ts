import express from "express";
import {
	allPosts,
	createPost,
	deletePost,
	getPost,
	likePost,
	postsByUser,
	unlikePost,
} from "../controllers/posts";
import { isAuth } from "../middlewares/auth";

const postRouter = express.Router();

postRouter.get("/all", allPosts);

postRouter.get("/user/:id", postsByUser);

postRouter.get("/:id", isAuth, getPost);

postRouter.delete("/:id", isAuth, deletePost);

postRouter.post("/create", isAuth, createPost);

postRouter.post("/like", isAuth, likePost);

postRouter.post("/unlike", isAuth, unlikePost);

export default postRouter;
