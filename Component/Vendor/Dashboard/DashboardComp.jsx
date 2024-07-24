import { useRouter } from "next/router";

function DashboardComp() {
    const navigate = useRouter();

    const response = {
        total: {
            totalDelivered: 120,
            totalReturn: 5,
            totalCancelled: 10,
            totalAmount: 15000
        },
        Orders: [
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
        ]
    };

    return (
        <div className='containerVendor'>
            <div className="dashboard pb-3">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="cardDash mt-1">
                            <h6>Total Delivered</h6>
                            <h5>{response.total.totalDelivered}</h5>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="cardDash mt-1">
                            <h6>Total Return</h6>
                            <h5>{response.total.totalReturn}</h5>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="cardDash mt-1">
                            <h6>Total Cancelled</h6>
                            <h5>{response.total.totalCancelled}</h5>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="cardDash mt-1">
                            <h6>Total Amount</h6>
                            <h5>{response.total.totalAmount}</h5>
                        </div>
                    </div>
                </div>

                <div className='RecentOrder'>
                    <h6>Recent Orders</h6>
                    <div className='MainTable text-center'>
                        <div>
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
                                        response.Orders.map((obj, key) => (
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
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardComp;
