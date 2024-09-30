import { Input, Col, Row } from "antd"

export default function Match(){
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <Input.Search></Input.Search>
      </Col>
      <Col span={4}></Col>
    </Row>
  )
}