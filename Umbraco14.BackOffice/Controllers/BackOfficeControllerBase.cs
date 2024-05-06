using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Routing;

namespace Umbraco14.BackOffice.Controllers;

[ApiController]
[BackOfficeRoute("back-office/api/v{version:apiVersion}/back-office")]
[Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
[MapToApi("back-office")]
public class BackOfficeControllerBase;
