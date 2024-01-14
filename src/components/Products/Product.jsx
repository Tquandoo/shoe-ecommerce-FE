import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";

function Product({ product }) {
    const {img, title, star, reviews, prevPrice, newPrice} = product
    return (
      <div className='col-md-3 mb-4 '>
      <Card > 
        <Card.Img variant="top" className='card-img ' src={img} />
        <Card.Body className='card-body'>
        <Card.Title className='my-2 fs-5 overflow-hidden' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</Card.Title>
          <div className="d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center">
              {
                (new Array(star).fill(1)).map((item, index) => (
                    <FaStar key={index} className='rate-star' size={13} />
                ))
              }
            </div>
            <span className='fs-10 ml-1 '>({reviews} reviewer)</span>
          </div>

          <div className='mt-3 mx-3 d-flex align-items-center justify-content-between'>
            <Card.Text className="my-2 ">
              <del className="text-muted">{prevPrice}</del>
              <strong className="mx-1 fs-5">${newPrice}</strong>
            </Card.Text>
            <span>
                <FaCartPlus  size={22} />
            </span>
          </div>
        </Card.Body>
      </Card>
    </div>

    )
}

export default Product;