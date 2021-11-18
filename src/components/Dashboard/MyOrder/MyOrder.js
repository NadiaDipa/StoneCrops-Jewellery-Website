import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Swal from "sweetalert2";

const MyOrder = () => {
    const { user } = useAuth();
    const [lists, setLists] = useState([]);
    const { email } = user;

    
    useEffect(() => {
        fetch(`https://still-beach-91758.herokuapp.com/allOrder/${email}`)
        .then((res) => res.json())
        .then((data) => setLists(data));
    }, [email]);
    console.log(lists);


    //delete order
  const deleteId = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://still-beach-91758.herokuapp.com/allOrder/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = lists.filter((list) => list._id !== id);
              setLists(remaining);
            }
          });
      }
    });
  };
    return (
        <div>
            <div className="container bg-dark ">
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              {Array.from({ length: 1 }).map((_, index) => (
                <th className="text-white" key={index}>
                  Buyer Name
                </th>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
                <th className="text-white" key={index}>
                  {" "}
                  PRODUCT ID{" "}
                </th>
              ))}

              {/* {Array.from({ length: 1 }).map((_, index) => (
                <th className="text-white" key={index}>
                  PRICE
                </th>
              ))} */}

              {Array.from({ length: 1 }).map((_, index) => (
                <th className="text-white" key={index}>
                  STATUS
                </th>
              ))}
              {Array.from({ length: 1 }).map((_, index) => (
                <th className="text-white" key={index}>
                  CANCEL
                </th>
              ))}
            </tr>
          </thead>
          {lists.map((list) => (
            <tbody>
              <tr>
                {Array.from({ length: 1 }).map((_, index) => (
                  <td
                    style={{ textAlign: "center" }}
                    className="fw-bold text-light"
                    key={index}
                  >
                    {list.Name}
                  </td>
                ))}

                {Array.from({ length: 1 }).map((_, index) => (
                  <td className="fw-bold text-white " key={index}>
                    {list?._id}
                  </td>
                ))}

                {/* {Array.from({ length: 1 }).map((_, index) => (
                  <td className="fw-bold text-white " key={index}>
                    {list?.price}
                  </td>
                ))} */}

                {Array.from({ length: 1 }).map((_, index) => (
                  <td className="fw-bold text-white " key={index}>
                    {list?.status}
                  </td>
                ))}
                {Array.from({ length: 1 }).map((_, index) => (
                  <td key={index} className="">
                    <button
                      onClick={() => deleteId(list._id)}
                      className="mx-3 text-danger "
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
        </div>
    );
};

export default MyOrder;