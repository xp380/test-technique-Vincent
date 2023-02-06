import React from "react";
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import MoviePoster from "../../Container/MoviePoster";
import MovieDescription from "../../Container/MovieDescription";
import "./MovieInformation.css";

const MovieInformation = (props) => {
  const { visible, setOpen, movieData } = props;
  const modalbody = {
    backgroundColor: "#212121",
  };
  const back = {
    backgroundColor: "#212121",
  };
  const close = (
    <div className="designclose">
      <CloseCircleOutlined />
    </div>
  );

  return (
    <Modal
      closeIcon={close}
      visible={visible}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1300}
      bodyStyle={modalbody}
      maskStyle={back}
      footer={false}
    >
      <div className="general">
        <MovieDescription movieData={movieData} />
        <MoviePoster movieData={movieData} />
      </div>
    </Modal>
  );
};

export default MovieInformation;
