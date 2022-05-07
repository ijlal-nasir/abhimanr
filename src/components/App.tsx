import { useState } from "react";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import Layout from "./layout/Layout";
import ProductDetails from "./product-details/ProductDetails";
import SearchResult from "./search-result/SearchResults";
import SearchTabs from "./search-tabs/SearchTabs";
import products from "../data/products.json";

function App() {
  const [productsData, setProductsData] = useState(products);
  const [searchedProducts, setSearchedProducts] = useState<any>(null);
  const [toggleProductDetails, setToggleProductDetails] =
    useState<boolean>(false);

  // console.log("products", productsData);
  // console.log("searchTerm", searchTerm);

  const searchProducts = (term: string) => {
    if (!term) {
      setSearchedProducts(null);
      return;
    }
    const items = productsData.filter((item) =>
      item.productName.toLowerCase().includes(term.toLowerCase())
    );
    if (!items.length) {
      setSearchedProducts(null);
      return;
    }
    setSearchedProducts(items);
  };

  return (
    <Layout>
      <Row>
        <Col md={6}>
          <Nav tabs>
            <NavItem className="active">
              <NavLink className="text-info ps-0">1. Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled>2. Addresses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled>3. Overview</NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Row>
            <SearchTabs searchProducts={searchProducts} />
          </Row>

          {searchedProducts && (
            <Row className="mt-4 mb-5">
              {searchedProducts.map((item: any, index: number) => (
                <SearchResult item={item} key={index} />
              ))}
            </Row>
          )}
        </Col>

        {searchedProducts && toggleProductDetails && (
          <Col md={4} className="mt-4">
            <ProductDetails />
          </Col>
        )}
      </Row>
    </Layout>
  );
}

export default App;
