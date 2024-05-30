<p align="center">
    <img alt="Medusa logo" src="https://aesthetix.s3.us-east-2.amazonaws.com/Aesthetix.png" style="width: 300px">
</p>
<h1 align="center">
  <a href="https://www.aesthetixplus.org/us">Aesthetix</a>
</h1>

This is an e-commerce website built with the help of <a href="https://docs.medusajs.com/">Medusa JS</a> using Next.js, React, Tailwind CSS for the frontend, and Express with PostgreSQL for the backend, payment integration using <a href="https://stripe.com/" style="color:#6773e6">Stripe</a> and <a href="https://aws.amazon.com/pm/serv-s3/?gclid=Cj0KCQjwpNuyBhCuARIsANJqL9PLJJ7P3QqpONdXjtzJUCL-f9V672pVekCYJCZkdJVToqrD74MnaIoaAndoEALw_wcB&trk=b8b87cd7-09b8-4229-a529-91943319b8f5&sc_channel=ps&ef_id=Cj0KCQjwpNuyBhCuARIsANJqL9PLJJ7P3QqpONdXjtzJUCL-f9V672pVekCYJCZkdJVToqrD74MnaIoaAndoEALw_wcB:G:s&s_kwcid=AL!4422!3!536324516040!e!!g!!amazon%20s3!11539706604!115473954714" style="color:#e05141">S3</a> for storing static assets.  


## Table of Contents
<ul>
<li><a href="#features">Features</a></li>
<li><a href="#teck-stack">Tech Stack</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#configuration">Configuration</a></li>
<li><a href="#running-the-app">Running the App</a></li>
<li><a href="#scripts">Scripts</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#licenses">License</a></li>
</ul>

## Features
<ul>
<li>User Auth (signup, login, logout)</li>
<li>Product Listing</li>
<li>Search using <a href="https://www.algolia.com/">Algolia</a></li>
<li>Shopping cart and checkout flow</li>
<li>Responsive design</li>
<li>Payment using <a href="https://stripe.com/">Stripe</a></li>
<li>S3 for storing static assets</li>
</ul>

## Teck Stack

<h5>Frontend:</h5>
  <img src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" style="width:25px; transform: translateY(5px);"> Next
  <br>
  <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" style="width:25px; transform: translateY(5px);"> React JS
  <br>
  <img src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" style="width:25px"> Tailwind
<h5>Backend:</h5>
  <img src="https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png" style="width:25px;"> Express JS
  <br>
  <img src="https://seeklogo.com/images/P/postgresql-logo-5309879B58-seeklogo.com.png" style="width:20px; transform: translateY(5px);"> PostgreSQL
  <br>
  <img src="https://seeklogo.com/images/T/typeorm-logo-F243B34DEE-seeklogo.com.png" style="width:20px; transform: translateY(5px)"> TypeORM
  <br>
  <img src="https://seeklogo.com/images/S/stripe-logo-C409DC9652-seeklogo.com.png" style="width:25px;"> Stripe
  <br>
  <img src="https://seeklogo.com/images/A/aws-s3-simple-storage-service-logo-B280D33C1B-seeklogo.com.png" style="width:20px; transform: translateY(5px)"> Amazon S3
<h5>Hosting:</h5>
<img src="https://seeklogo.com/images/V/vercel-logo-F748E39008-seeklogo.com.png" style="width:20px"> Vercel
<br>
<img src="https://railway.app/brand/logo-light.png" style="width:20px; border-radius:25px;transform: translateY(5px)"> Railway

## Prerequisites
<ul>
<li>Node.js (v14.x or later)</li>
<li>npm or yarn</li>
<li>PostgreSQL</li>
</ul>

## Installation
1. Clone the repository:
```bash
git clone https://github.com/masrur-mmrs/aesthetix-store-front
cd aesthetix-store-front
```
2. Install dependencies for the frontend:
```bash
cd frontend
npm install
```
## Configuration
1. Set up environment variables:

Create a `.env.local` file in the frontend directory with the following content:
```env
NEXT_PUBLIC_API_URL=http://localhost:7001/api
```

## Running the App
Start the backend server:
```bash
cd frontend
npm run dev
```

## Scripts

**Backend Scripts:**
<ul>
<li>npm run build</li>
<li>npm run start</li>
<li>npm run dev</li>
</ul>

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Licenses
This project is licensed under the MIT License. See the <a href="https://github.com/masrur-mmrs/aesthetix-store-front/blob/main/LICENSE">LICENSE</a> file for details.
