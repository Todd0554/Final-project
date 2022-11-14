import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../actions/blogActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { SITE_CREATE_RESET } from "../contents/siteContents";

const BlogEdit = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [image, setImage] = useState("");

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const blogCreate = useSelector((state) => state.blogCreate);
  const {
    success: successCreate,
    error: errorCreate,
    blog: newBlog,
  } = blogCreate;

  useEffect(() => {
    if (!userInfo || userInfo._id !== userId) {
      navigate("/blogs");
    }
    if (successCreate) {
      dispatch({ type: SITE_CREATE_RESET });
      navigate("blogs");
    }
  }, [dispatch, navigate, userId, newBlog, successCreate]);

  const submitBlogHandler = (e) => {
    e.preventDefault();
    console.log("event", e.target);
    dispatch(
      createBlog({
        title,
        article,
        image,
      })
    );
  };

  // const [image, setImage] = useState("");
  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multerpart/form-data",
  //       },
  //     };
  //     const { data } = await axios.post("/api/upload", formData, config);
  //     setImage(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/myhome">
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{ width: 28, height: 23, color: "black" }}
              className="mt-5"
              variant="primary"
            />
          </Link>
          <h2 className="mb-4 text-center">BLOG POST</h2>
          {errorCreate && <p>{errorCreate}</p>}

          <Form onSubmit={submitBlogHandler}>
            {/* <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image: </Form.Label>
              <Form.Control
                type="file"
                placeholder="insert image"
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group> */}

            <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image: </Form.Label>
              <Form.Control
                type="string"
                placeholder="insert image"
                // onChange={(e) => setImage(e.target.value)}
                value="path"
                readOnly
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="string"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="article">
              <Form.Label>Article</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Article"
                rows={8}
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2 d-md-block">
              <Button variant="secondary" type="submit" className="my-3 px-5 ">
                POST
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogEdit;
