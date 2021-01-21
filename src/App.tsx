/** @jsxImportSource @emotion/react */

import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import tw from "twin.macro";

const Root = tw.div`h-full flex flex-col`;

const AppBar = tw.nav`flex px-5 h-14 items-center bg-pink-500 text-white shadow-lg`;
const NavList = tw.ul`flex h-full	items-center`;
const NavItem = tw.li`h-full flex items-center`;
const NavLink = tw(
  Link
)`h-full flex items-center font-medium p-3 hover:opacity-80 hover:bg-pink-600 `;

const Footer = tw.footer`flex bg-gray-800 text-gray-400 h-16 p-5`;
const Copyright = tw.p`text-xs flex items-center`;

function App() {
  return (
    <Router>
      <Root>
        <AppBar>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pricing">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/users">Users</NavLink>
            </NavItem>
          </NavList>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer>
          <Copyright>Copyright © 2021 〇〇 Inc. All Rights Reserved.</Copyright>
        </Footer>
      </Root>
    </Router>
  );
}

const Container = tw.div`container px-5 py-24 mx-auto text-gray-600 flex-1`;

function Home() {
  return (
    <Container>
      <div tw="flex flex-wrap w-full mb-16 flex-col items-center text-center">
        <h2 tw="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">Home</h2>
        <p tw="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          sed?
        </p>
      </div>
      <div tw="flex flex-wrap text-center">
        <div tw="sm:w-1/2 mb-10 px-4">
          <div tw="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              tw="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1201x501"
            />
          </div>
          <h2 tw="text-2xl font-medium text-gray-900 mt-6 mb-3">Image 1</h2>
          <p tw="leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime id
            excepturi porro dolores architecto molestiae, cupiditate aliquid
            doloremque illo? Doloribus.
          </p>
          <button tw="flex mx-auto mt-6 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded">
            Button
          </button>
        </div>
        <div tw="sm:w-1/2 mb-10 px-4">
          <div tw="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              tw="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1202x501"
            />
          </div>
          <h2 tw="text-2xl font-medium text-gray-900 mt-6 mb-3">Image 2</h2>
          <p tw="leading-relaxed text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            assumenda nostrum odit sed dolor dolorem quasi consectetur
            repudiandae expedita laborum!
          </p>
          <button tw="flex mx-auto mt-6 text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded">
            Button
          </button>
        </div>
      </div>
    </Container>
  );
}

function Pricing() {
  return (
    <Container>
      <div tw="flex flex-col text-center w-full mb-20">
        <h1 tw="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
          Pricing
        </h1>
        <p tw="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero a
          suscipit consequuntur amet sequi quod, assumenda architecto deserunt
          quisquam omnis.
        </p>
      </div>
      <div tw="lg:w-2/3 w-full mx-auto overflow-auto">
        <table tw="table-auto w-full text-left whitespace-nowrap">
          <thead>
            <tr>
              <th tw="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                Plan
              </th>
              <th tw="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Speed
              </th>
              <th tw="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Storage
              </th>
              <th tw="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                Price
              </th>
              <th tw="w-10 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td tw="px-4 py-3">Start</td>
              <td tw="px-4 py-3">5 Mb/s</td>
              <td tw="px-4 py-3">15 GB</td>
              <td tw="px-4 py-3 text-lg text-gray-900">Free</td>
              <td tw="w-10 text-center">
                <input name="plan" type="radio" />
              </td>
            </tr>
            <tr>
              <td tw="border-t-2 border-gray-200 px-4 py-3">Pro</td>
              <td tw="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
              <td tw="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
              <td tw="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                $24
              </td>
              <td tw="border-t-2 border-gray-200 w-10 text-center">
                <input name="plan" type="radio" />
              </td>
            </tr>
            <tr>
              <td tw="border-t-2 border-gray-200 px-4 py-3">Business</td>
              <td tw="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
              <td tw="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
              <td tw="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                $50
              </td>
              <td tw="border-t-2 border-gray-200 w-10 text-center">
                <input name="plan" type="radio" />
              </td>
            </tr>
            <tr>
              <td tw="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                Exclusive
              </td>
              <td tw="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                48 Mb/s
              </td>
              <td tw="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                120 GB
              </td>
              <td tw="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                $72
              </td>
              <td tw="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                <input name="plan" type="radio" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div tw="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
        <span tw="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            tw="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </span>
        <button tw="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
          Button
        </button>
      </div>
    </Container>
  );
}

function Users() {
  return (
    <Container>
      <div tw="flex flex-col text-center w-full mb-20">
        <h1 tw="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">Users</h1>
        <p tw="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          consequatur excepturi est ea unde? Porro quibusdam corporis quos et
          ex.
        </p>
      </div>
      <div tw="flex flex-wrap -m-2">
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">UI Designer</p>
            </div>
          </div>
        </div>
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">CTO</p>
            </div>
          </div>
        </div>
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">Founder</p>
            </div>
          </div>
        </div>
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">DevOps</p>
            </div>
          </div>
        </div>
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">Software Engineer</p>
            </div>
          </div>
        </div>
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">UX Researcher</p>
            </div>
          </div>
        </div>
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">QA Engineer</p>
            </div>
          </div>
        </div>
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">System</p>
            </div>
          </div>
        </div>
        <div tw="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div tw="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              tw="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div tw="flex-grow">
              <h2 tw="text-gray-900 font-medium">John Doe</h2>
              <p tw="text-gray-500">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
