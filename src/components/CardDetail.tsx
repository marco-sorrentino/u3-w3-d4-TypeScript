import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Detail } from "../types/detail";

const CardDetail = () => {
  const params = useParams();
  const [detail, setDetail] = useState<Detail>({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
      );
      if (res.ok) {
        const detail = await res.json();
        console.log(detail);
        setDetail(detail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="d-flex">
            <div>
              <img id="immagine" src={detail.imageUrl} alt="" />
            </div>
            <div>
              <p>{detail.title}</p>
              <p>data</p>
              <p>{detail.summary}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDetail;
