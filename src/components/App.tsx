import { useState } from "react";
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import Layout from "./layout/Layout";
import ProductDetails from "./product-details/ProductDetails";
import SearchResult from "./search-result/SearchResults";
import SearchTabs from "./search-tabs/SearchTabs";
import products from "../data/products.json";
import { Product } from "../types/Product";

function App() {
  const [productsData, setProductsData] = useState(products);
  const [searchedProducts, setSearchedProducts] = useState<any>(null);
  const [toggleProductDetails, setToggleProductDetails] =
    useState<boolean>(false);
  const [selected, setSelected] = useState<any>(null);

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

  const handleOnClickSearchItem = (item: any) => {
    setSelected(item);
    setToggleProductDetails(true);
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
              {searchedProducts.map((item: Product, index: number) => (
                <SearchResult
                  item={item}
                  key={index}
                  handleOnClick={handleOnClickSearchItem}
                  active={selected && selected.productName === item.productName}
                />
              ))}
            </Row>
          )}
        </Col>

        {searchedProducts && toggleProductDetails && selected && (
          <Col md={4} className="mt-4">
            <ProductDetails item={selected} />
          </Col>
        )}
      </Row>
    </Layout>
  );
}

export default App;
