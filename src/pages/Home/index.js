import React, { useState } from 'react';
import * as L from './styled';
import img1 from './img/img1.jpeg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpeg';
import img4 from './img/img4.jpeg';
import img5 from './img/img5.jpeg';
import img6 from './img/img6.jpeg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpeg';
import img9 from './img/img9.jpeg';
import img10 from './img/img10.jpeg';
import img11 from './img/img11.jpg';
import img13 from './img/img13.jpg';
import img14 from './img/img14.jpg';
import img15 from './img/img15.gif';
import img16 from './img/img16.gif';
import Background from './img/img12.jpg';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

import {
  Jumbotron, Container, Row, Col, Navbar, Nav, NavItem, NavLink,
  Card, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';

import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App(props) {
  const [cadastro, setCadastro] = useState(false);
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);


  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        setCadastro(true);

      })
      .catch(err => {
        setErro(true);

      });
  }


  //  style={{ backgroundImage: `url(${Background})` }}


  return (

    <L.HomeContainer >
      <L.ContainerMenu  >
        <Navbar light expand="md">
          <Nav className="mr-auto" navbar>
            <L.Img2 src={img14} />
            <NavItem>
              <NavLink href="#inicio">Início |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#presentes">Presentes |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#chocolates">Chocolates |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#ocasioes">Ocasiões |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#papelariaFofa"> Papelaria Fofa |</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contato">Contate-nos </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </L.ContainerMenu>

      <L.Container1 id="inicio">
        <Jumbotron fluid>
          <Container fluid>
          <Row>
            <Col> <L.ImgCont1 src={img13} /></Col>
            <Col><h1 className="display-3">NEGAMALUCA  PersonalizadoS</h1>
            <p className="lead">Sugestões para presentear quem você ama.</p>
            </Col>
          </Row>
          </Container>
        </Jumbotron>
      </L.Container1>

      <L.Container2>
      <L.Img5 src={img16}/>
        <Carousel variant="dark">
          <Carousel.Item>
            <L.Img src={img10} />
          </Carousel.Item>
          <Carousel.Item>
            <L.Img src={img1} />
          </Carousel.Item>
          <Carousel.Item>
            <L.Img src={img2} />
          </Carousel.Item>
          <Carousel.Item>
            <L.Img src={img3} />
          </Carousel.Item>
          <Carousel.Item>
            <L.Img src={img4} />
          </Carousel.Item>
          <Carousel.Item>
            <L.Img src={img5} />
          </Carousel.Item>
          <Carousel.Item>
            <L.Img src={img6} />
          </Carousel.Item>
        </Carousel>
       
      </L.Container2>

      <L.Container3>
      <Row>
        <Col id="papelariaFofa">
          <Card style={{ backgroundImage: `url(${Background})` }}>
            <L.ImgCont3 src={img7}/>
            <CardBody>
             <br/>
              <CardTitle tag="h5">Papelaria Fofa</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Eternizamos Momentos</CardSubtitle>
              <CardText>💝💝💝Mimos personalizados para a sua festa? Temos também!! Reserve já 💝💝💝 </CardText>
              <L.Button>Ler Mais</L.Button>
            </CardBody>
          </Card>
        </Col>
        <Col id="ocasioes">
          <Card style={{ backgroundImage: `url(${Background})` }}>
            <L.ImgCont3 src={img8}/>
            <CardBody>
              <CardTitle tag="h5">Dia dos Namorados</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Viva o Amor</CardSubtitle>
              <CardText>_♥ Avisa o crush/namorado que esse ano você quer receber um mimo da PersonalizadoS ♥_ </CardText>
              <L.Button>Ler Mais</L.Button>
            </CardBody>
          </Card>
        </Col>
        <Col id="presentes">
          <Card style={{ backgroundImage: `url(${Background})` }}>
            <L.ImgCont3 src={img9}/>
            <CardBody>
              <br/>
              <CardTitle tag="h5">Dia das Mães</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Mamãe nosso AMOR maior</CardSubtitle>
              <CardText>Idealize seus PERSONALIZADOS, nós transformamos em realidades 💝</CardText>
              <br/>
              <br/>
              <L.Button>Ler Mais</L.Button>
            </CardBody>
          </Card>
        </Col>
        <Col id="chocolates">
          <Card style={{ backgroundImage: `url(${Background})` }}>
          <L.ImgCont3 src={img11}/>
            <CardBody>
              <br/>
              <CardTitle tag="h5">Chocolates</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">CHOCOLOUCOS</CardSubtitle>
              <CardText>✨ Combinadinhos Perfeito, TEMOS TAMBÉM! ✨<br/> Loucos por CHOCOLATE aqui é o seu lugar!</CardText>
              <br/>
              <br/>
              <L.Button>Ler Mais</L.Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </L.Container3>

      <L.CadastroEmail id="contato">

        <L.Paragrafo2> SUBSCREVE A NEWSLETTER </L.Paragrafo2>
        <L.Paragrafo2> FICA A PAR DAS NOSSAS PROMOÇÕES E RECEBE AS NOVIDADES TODAS AS SEMANAS E MUITO MAIS NO TEU E-MAIL. </L.Paragrafo2>

        <L.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <L.Button type="button" onClick={handlePesquisa}>SUBSCREVER</L.Button>
        <br />
       
        {cadastro ? <L.ErrorMsg>E-mail cadastrado com sucesso.</L.ErrorMsg> : ''}
        {erro ? <L.ErrorMsg>Ocorreu um erro. Tente novamente.</L.ErrorMsg> : ''}
        
        <a link href="https://www.instagram.com/laisalamir/" target="_blank"><AiFillInstagram /></a>
        <a link href="https://github.com/laisalamir" target="_blank"><AiFillGithub /></a>
        <a link href="https://www.linkedin.com/in/laisa-lamir-b9858215b/" target="_blank"><AiFillLinkedin /></a>
      </L.CadastroEmail>
      <L.Img3 src={img15}/>
      <L.Footer>
        <p> GamaAcademy  -  LAISA LAMIR  - 2021   </p>
      </L.Footer>
    </L.HomeContainer>
  );

}


export default App;