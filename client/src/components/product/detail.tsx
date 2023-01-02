import React from "react";
import { Product } from "../../graphql/products";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProductDetail = ({
  item: { imageUrl, price, title, description },
}: {
  item: Product;
}) => {
  return (
    <Container maxWidth="md">
      <Row className="detailLayout">
        <Col sm className="detailLeftLayout">
          <img src={imageUrl} className="productImage" />
        </Col>
        <Col sm className="detailRightLayout">
          <div className="productTitle">{title}</div>
          <div className="productPrice">₩ {price}</div>
          <button className="detailCart">Add to Cart</button>
          <Description />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

const Description = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="accordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: "#3c6b39" }}>PRODUCT INFO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I'm a product detail. I'm a great place to add more information
            about your product such as sizing, material, care and cleaning
            instructions. This is also a great space to write what makes this
            product special and how your customers can benefit from this item.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color: "#3c6b39" }}>
            RETURN & REFUND POLICY
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I’m a Return and Refund policy. I’m a great place to let your
            customers know what to do in case they are dissatisfied with their
            purchase. Having a straightforward refund or exchange policy is a
            great way to build trust and reassure your customers that they can
            buy with confidence.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ color: "#3c6b39" }}>SHIPPING INFO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I'm a shipping policy. I'm a great place to add more information
            about your shipping methods, packaging and cost. Providing
            straightforward information about your shipping policy is a great
            way to build trust and reassure your customers that they can buy
            from you with confidence.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
