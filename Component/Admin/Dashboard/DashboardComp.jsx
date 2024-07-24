import { adminAxios } from '@/Config/Server'
import ContentControl from '@/ContentControl/ContentControl'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

function DashboardComp() {
    const { setAdminLogged } = useContext(ContentControl)
    const [response, setResponse] = useState({
        total: {
            totalDelivered: '',
            totalCancelled: '',
            totalReturn: '',
            totalAmount: ''
        },
        Orders: []
    })

    const mockData = [
        {
            "date": "2024-07-18",
            "customer": "John Doe",
            "price": "$300",
            "pay": "Paid",
            "order": "Completed",
            "idSecret": "123456",
            "action": "View"
        },
        {
            "date": "2024-07-17",
            "customer": "Jane Smith",
            "price": "$150",
            "pay": "Pending",
            "order": "Processing",
            "idSecret": "654321",
            "action": "View"
        },
        {
            "date": "2024-07-16",
            "customer": "Emily Johnson",
            "price": "$200",
            "pay": "Paid",
            "order": "Shipped",
            "idSecret": "112233",
            "action": "View"
        },
        {
            "date": "2024-07-15",
            "customer": "Michael Brown",
            "price": "$400",
            "pay": "Paid",
            "order": "Completed",
            "idSecret": "445566",
            "action": "View"
        },
        {
            "date": "2024-07-14",
            "customer": "Jessica Davis",
            "price": "$250",
            "pay": "Pending",
            "order": "Cancelled",
            "idSecret": "778899",
            "action": "View"
        }
    ]


    const navigate = useRouter()

    useEffect(() => {
        adminAxios((server) => {
            server.get('/admin/getDashboard').then((res) => {
                if (res.data.login) {
                    setAdminLogged({ status: false })
                    localStorage.removeItem("adminToken")
                    navigate.push('/admin/login')
                } else {
                    setResponse(res.data)
                }
            }).catch((err) => {
                alert("error")
            })
        })
    }, [])
    return (
        <div className='AdminContainer'>
            <div className="dashboard pb-3">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="cardDash mt-1">
                            <h6>Total Delivered</h6>
                            <h5>{response.total.totalDelivered || 8}</h5>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="cardDash mt-1">
                            <h6>Total Return</h6>
                            <h5>{response.total.totalReturn || 500}</h5>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="cardDash mt-1">
                            <h6>Total Cancelled</h6>
                            <h5>{response.total.totalCancelled || 4}</h5>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="cardDash mt-1">
                            <h6>Total Amount</h6>
                            <h5>{response.total.totalAmount || 56}</h5>
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
                                        <th>Pay</th>
                                        <th>Order</th>
                                        <th>Id-Secret</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        mockData.map((obj, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{obj.date}</td>
                                                    <td>{obj.customer}</td>
                                                    <td>{obj.price}</td>
                                                    <td>{obj.pay}</td>
                                                    <td>{obj.order}</td>
                                                    <td>{obj.idSecret}</td>
                                                    <td>
                                                        <button className='ActionBtn' onClick={() => {
                                                            navigate.push(`/admin/orders/${obj.secretOrderId}/${obj.userId}`)
                                                        }}>Edit</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardComp