'use client'

import Pagina from "@/components/Pagina"
import Link from "next/link"
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Page() {

    const passageiros = JSON.parse(localStorage.getItem('passageiros')) || []

    return (
        <Pagina titulo="Passageiros">

            <Link
                href="/passageiros/create"
                className="btn btn-primary mb-3"
            >
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {passageiros.map((item, i) => (
                        <tr key={i}>
                            <td>
                                {i} - 
                                <FaRegEdit className="text-primary" />
                                <MdDelete className="text-danger" />
                            </td>
                            <td>{item.nome}</td>
                            <td>
                                <a href={item.site} target="_blank">
                                    <img src={item.logo} width={100} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}