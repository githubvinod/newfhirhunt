--- 
 title: "FHIR® Servers on Azure" 
 id: 104  
 websiteUrl: "Nil" 
 forks: 0 
 openIssues: 0  
 facebookShare: 0  
 twitterShare: 0  
 emailShare: 0  
 githubUrl: 'Nil'
 stars: 0 
 watchers: 0 
 author: 'Admin' 
 type: 'post' 
 description: "[FHIR®](hansenmsfhir-azureblobmasterhl7orgfhir) Fast Healthcare Interoperability Resources is a next generation standards framework created by HL7 It "
 featuredimage: 'https://www.medigy.com/img/featured/featured_104.jpg' 
 date: '2019-01-07'
 categories: ['null']
---
[FHIR®](/hansenms/fhir-azure/blob/master/hl7.org/fhir) Fast Healthcare Interoperability Resources is a next generation standards framework created by HL7. It is used for transfer of clinical and administrative data between software applications used is by various healthcare providers.In this repository, you will find templates for setting up FHIR® servers from [Firely](https://fire.ly) and [HAPI FHIR®](http://hapifhir.io/).Firely has the open source [Spark](https://github.com/FirelyTeam/spark) server, which supports Draft Standard for Trial Use 2 (DSTU2) and they also have a commercial server called [vonk](https://fire.ly/vonk), which supports Standard for Trial Use 3 (STU3). The servers and underlying libraries are written in .NET and can use Cosmos DB (Mongo API) as a backend store. Vonk also supports SQL server as the backend store.[HAPI FHIR®](http://hapifhir.io/) is a library for adding FHIR® support to your applications. It is writtent in Java and licensed under the Apache Software License, version 2. The project includes an example server, which I have [modified](https://github.com/hansenms/hapi-fhir/tree/azuresql) to use Azure SQL as the backend database.The templates use all Platform as a Service (PaaS) services with [Azure Web App](https://azure.microsoft.com/en-us/services/app-service/web/) on the front end and either [Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/) (with MongoDb API) or [Azure SQL Database](https://azure.microsoft.com/en-us/services/sql-database/) on the backend. There are currently 3 templates to choose from:- [Spark Server with backend Cosmos DB (MongoDb API)](https://github.com/hansenms/fhir-azure/blob/master/spark).
- [Vonk Server with CosmosDB (MongoDb API) backend](https://github.com/hansenms/fhir-azure/blob/master/vonk-cosmosdb).
- [Vonk Server with Azure SQL backend](https://github.com/hansenms/fhir-azure/blob/master/vonk-sql).
- [HAPI-FHIR® Example Server with Azure SQL backend](https://github.com/hansenms/fhir-azure/blob/master/hapi-fhir-sql).

All templates automate the deployment of required resources. The Spark template also deploys the application code.The Vonk server deployment requires a couple of manual steps to download the application binaries and a trial license since this is a commercial product. See instructions for the individual templates. Note that [Firely Vonk now officially supports Cosmos DB (Mongo API)](http://docs.simplifier.net/vonk/configuration/db_cosmosdb.html#configure-cosmosdb).The HAPI FHIR® Server needs a \*.war file for deployment. Please [see instructions](https://github.com/hansenms/fhir-azure/blob/master/hapi-fhir-sql).