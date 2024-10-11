'use client'

import Pagina from "@/components/Pagina";
import apiVoos from "@/services/apiVoos";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {

    const route = useRouter()

    const [empresa, setEmpresa] = useState({ nome: '', logo: '', site: '' })

    function salvar(dados) {

        if (empresa._id) {
            apiVoos.put('empresas/' + empresa._id, dados)
        } else {
            apiVoos.post('empresas', dados)
            .then(resultado=>{
                return route.push('/backend/empresas')
            })
            .catch(error=>{
                alert(error.response.data.message)
            })
        }

    }

    return (
        <Pagina titulo="Empresa">

            <Formik
                initialValues={empresa}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    setValues
                }) => {

                    useEffect(() => {
                        apiVoos.get(`empresas/${params.id}`).then(resultado => {
                            setValues(resultado.data)
                            setEmpresa(resultado.data)
                        })
                    }, [])

                    return (
                        <Form>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange('nome')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="logo">
                                <Form.Label>Logo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="logo"
                                    value={values.logo}
                                    onChange={handleChange('logo')}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="site">
                                <Form.Label>Site</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="site"
                                    value={values.site}
                                    onChange={handleChange('site')}
                                />
                            </Form.Group>
                            <div className="text-center">
                                <Button onClick={handleSubmit} variant="success">
                                    <FaCheck /> Salvar
                                </Button>
                                <Link
                                    href="/backend/empresas"
                                    className="btn btn-danger ms-2"
                                >
                                    <MdOutlineArrowBack /> Voltar
                                </Link>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Pagina>
    )
}
