import React from 'react';
import { Table } from 'react-bootstrap';

function Map() {
    // const students = ["Mahima"," Bhavna", "Simran"," Akansha"];
    const students = [
        { name: "Mahima", email: "mahimapatel@gmail.com", dsg: "developer" },
        { name: "Nitin", email: "nitinchauhan@gmail.com", dsg: "trainer" },
        { name: "Bhavna", email: "bhavna@gmail.com", dsg: "developer" }
    ]

    return (
        <>
            <h1 className='text-center p-3 bg-secondary text-light'>Map Component</h1>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>S No.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Designation</td>
                    </tr>
                    {
                        students.map((item, i) => {
                            return (
                                item.dsg === "developer" ?
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.dsg}</td>
                                    </tr> : null
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Map;