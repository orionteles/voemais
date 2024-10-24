'use client'

import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MdOutlineChair } from "react-icons/md";
import { MdChair } from "react-icons/md";

export default function Page() {

    const fileiras = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const colunas = ['A', 'B', 'C', 'D', 'E', 'F']

    const bloqueadas = ['1A', '1B', '1C', '2A', '2B', '2C', '3C', '4C', '9F', '4F']

    return (

        <>
            <h1>Assentos</h1>

            <div className="container" style={{ width: 500, background: '#f1f1f1' }}>

                <Row>
                    {colunas.map(coluna => (
                        <>
                            {['A', 'D'].includes(coluna) && <Col />}
                            <Col>{coluna}</Col>
                        </>
                    ))}
                </Row>
                {fileiras.map(fila => (
                    <Row key={fila}>
                        {colunas.map(coluna => (
                            <>
                                {coluna == 'A' && <Col>{fila}</Col>}
                                {coluna == 'D' && <Col />}
                                <Col>
                                    {bloqueadas.includes(fila+coluna) ?
                                    <MdChair style={{ fontSize: 40 }} /> :
                                    <MdOutlineChair style={{ fontSize: 40 }} />
                                    }
                                </Col>
                            </>
                        ))}
                    </Row>
                ))}

                <MdOutlineChair />
                <MdChair />
            </div>
        </>
    )
}