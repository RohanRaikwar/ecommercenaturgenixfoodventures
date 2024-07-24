import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { vendorAxios, ServerId } from '../../../Config/Server';
import ContentControl from '../../../ContentControl/ContentControl';

function ProductsComp({
  responseServer, setResponse,
  setSearch, search,
  pages, setPages,
  products, setProducts,
  setUpdate }) {

  const navigate = useRouter();
  const { setVendorLogged } = useContext(ContentControl);

  const mockData = {
    products: [
      {
        uni_id_1: "uni1",
        uni_id_2: "id1",
        files: [{ filename: "image1.jpg" }],
        name: "Product 1",
        category: "Category 1",
        price: 50,
        mrp: 60,
        discount: 10,
        slug: "product-1",
        _id: "1"
      },
      {
        uni_id_1: "uni2",
        uni_id_2: "id2",
        files: [{ filename: "image2.jpg" }],
        name: "Product 2",
        category: "Category 2",
        price: 70,
        mrp: 80,
        discount: 12,
        slug: "product-2",
        _id: "2"
      },
      {
        uni_id_1: "uni3",
        uni_id_2: "id3",
        files: [{ filename: "image3.jpg" }],
        name: "Product 3",
        category: "Category 3",
        price: 30,
        mrp: 40,
        discount: 25,
        slug: "product-3",
        _id: "3"
      }
    ]
  };

  useEffect(() => {
    // Mock data assignment
    setProducts(mockData.products);
  }, []);

  function searchProduct(e) {
    e.preventDefault();
    navigate.push(`/vendor/products?search=${search}`);
  }

  return (
    <div className='ProductsComp containerVendor'>
      <div className="Head">
        <div>
          <form onSubmit={searchProduct}>
            <input value={search} type="text" onChange={(e) => {
              setSearch(e.target.value);
            }} placeholder='Search' />
          </form>
        </div>

        <div>
          <button data-for="addProduct" onClick={() => {
            navigate.push('/vendor/products/add');
          }}>Add Product</button>
        </div>
      </div>

      <div className='tableDiv'>
        <div className="table-responsive text-center">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Mrp</th>
                <th>Discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((obj, key) => {
                  return (
                    <tr key={key}>
                      <td>
                        <img
                          src={`${ServerId}/product/${obj.uni_id_1}${obj.uni_id_2}/${obj.files[0].filename}`}
                          alt={obj.name}
                        />
                      </td>
                      <td className='oneLineTxtMax-300'>
                        {obj.name}
                      </td>
                      <td>
                        {obj.category}
                      </td>
                      <td>
                        ₹{obj.price}
                      </td>
                      <td>
                        ₹{obj.mrp}
                      </td>
                      <td>
                        {obj.discount} %
                      </td>
                      <td>
                        <button data-for="actionBtn" onClick={() => {
                          window.open(`/p/${obj.slug}/${obj._id}`, '_blank');
                        }}>view</button>
                        <button data-for="actionBtn" onClick={() => {
                          navigate.push(`/vendor/products/edit/${obj._id}`);
                        }}>edit</button>
                        <button data-for="actionBtn" onClick={() => {
                          if (window.confirm(`Do you want delete ${obj.name}`)) {
                            vendorAxios((server) => {
                              server.delete('/vendor/deleteProduct', {
                                data: {
                                  proId: obj._id,
                                  folderId: `${obj.uni_id_1}${obj.uni_id_2}/`
                                }
                              }).then((res) => {
                                if (res.data.login) {
                                  setVendorLogged({ status: false });
                                  localStorage.removeItem('vendorToken');
                                  navigate.push('/vendor/login');
                                } else {
                                  setUpdate(update => !update);
                                  alert("Deleted");
                                }
                              }).catch(() => {
                                alert("Error");
                              });
                            });
                          }
                        }}>delete</button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>

      {
        responseServer.pagination &&
        (
          <div className='ProListPaginationArea'>
            {
              pages.map((obj, key) => {
                if (responseServer.currentPage === obj) {
                  return (
                    <button key={key} onClick={() => {
                      const sp = new URLSearchParams(window.location.search);
                      vendorAxios((server) => {
                        server.get('/admin/getProducts', {
                          params: {
                            page: obj,
                            search: sp.get("search")
                          }
                        }).then((response) => {
                          if (response.data.login) {
                            setVendorLogged({ status: false });
                            localStorage.removeItem('vendorToken');
                            navigate.push('/vendor/login');
                          } else {
                            setProducts(response.data.data);
                            setResponse(response.data);
                            setPages(response.data.pages);
                          }
                        }).catch((err) => {
                          console.log("error");
                        });
                      });
                    }} className='active'>{obj}</button>
                  );
                } else {
                  return (
                    <button key={key} onClick={() => {
                      const sp = new URLSearchParams(window.location.search);
                      vendorAxios((server) => {
                        server.get('/admin/getProducts', {
                          params: {
                            page: obj,
                            search: sp.get("search")
                          }
                        }).then((response) => {
                          if (response.data.login) {
                            setVendorLogged({ status: false });
                            localStorage.removeItem('vendorToken');
                            navigate.push('/vendor/login');
                          } else {
                            setProducts(response.data.data);
                            setResponse(response.data);
                            setPages(response.data.pages);
                          }
                        }).catch((err) => {
                          console.log("error");
                        });
                      });
                    }} >{obj}</button>
                  );
                }
              })
            }
          </div>
        )
      }
    </div>
  );
}

export default ProductsComp;
