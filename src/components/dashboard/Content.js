import React from "react";
import "./content.css";
import { Container } from "@material-ui/core";
import Formvalidation from "./Formvalidation";
import { Routes, Route } from "react-router-dom";
import Record from "./Record";
export const Content = () => {
  return (
    <div className='contetn'>
      <div className='contentwrapper'>
        <Container>
          <Routes>
            <Route path='/' element={<Formvalidation />} />
            <Route path='/record' element={<Record />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
};
