import { vendorAxios } from "@/Config/Server";
import ContentControl from "@/ContentControl/ContentControl";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";

function OrdersComp({ search, setSearch, setOrders, setTotal, total }) {
  const navigate = useRouter();
  const { setVendorLogged } = useContext(ContentControl);

  const mockData = {
    orders: [
      {
        date: "2024-07-23",
        customer: "John Doe",
        price: "$100.00",
        payType: "Credit Card",
        OrderStatus: "Delivered",
        secretOrderId: "12345",
        userId: "1"
      },
      {
        date: "2024-07-22",
        customer: "Jane Smith",
        price: "$200.00",
        payType: "PayPal",
        OrderStatus: "Cancelled",
        secretOrderId: "12346",
        userId: "2"
      },
      {
        date: "2024-07-21",
        customer: "Michael Brown",
        price: "$150.00",
        payType: "Credit Card",
        OrderStatus: "Returned",
        secretOrderId: "12347",
        userId: "3"
      },
      {
        date: "2024-07-20",
        customer: "Emily Davis",
        price: "$250.00",
        payType: "Debit Card",
        OrderStatus: "Delivered",
        secretOrderId: "12348",
        userId: "4"
      },
      {
        date: "2024-07-19",
        customer: "Chris Johnson",
        price: "$300.00",
        payType: "Credit Card",
        OrderStatus: "Delivered",
        secretOrderId: "12349",
        userId: "5"
      }
    ],
    total: 5
  };

  const [orders, setOrdersState] = useState(mockData.orders);

  useEffect(() => {
    setOrders(mockData.orders);
    setTotal(mockData.total);
  }, []);

  return (
    <div className='OrdersComp containerVendor'>
      <div className="Head">
        <div>
          <input data-for="search" type="text" value={search} onInput={(e) => {
            setSearch(e.target.value);
          }} placeholder='Search Name' />
        </div>
      </div>

      <div className='tableDiv'>
        <div className="table-responsive text-center">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Date</th>
                <th>Customer</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((obj, key) => {
                  return (
                    <tr key={key}>
                      <td>{obj.date}</td>
                      <td>{obj.customer}</td>
                      <td>{obj.price}</td>
                      <td>{obj.payType}</td>
                      <td>{obj.OrderStatus}</td>
                      <td>
                        <button data-for="actionBtn" onClick={() => {
                          navigate.push(`/vendor/orders/${obj.secretOrderId}/${obj.userId}`)
                        }}>Details</button>
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
        orders.length !== total && <div>
          <button data-for="loadMore" onClick={() => {
            vendorAxios((server) => {
              server.get('/vendor/getAllOrders', {
                params: {
                  search: search,
                  skip: orders.length,
                }
              }).then((res) => {
                if (res.data.login) {
                  setVendorLogged({ status: false });
                  localStorage.removeItem('vendorToken');
                  navigate.push('/vendor/login');
                } else {
                  setOrdersState([...orders, ...res.data.orders]);
                  setOrders([...orders, ...res.data.orders]);
                  setTotal(res.data.total);
                }
              }).catch(() => {
                console.log('err');
              });
            });
          }}>Load More</button>
        </div>
      }
    </div>
  );
}

export default OrdersComp;
