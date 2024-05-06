var builder = WebApplication.CreateBuilder(args);

const string allowLocalhost = "allowLocalhost";

builder.Services.AddCors(options =>
{
    options.AddPolicy(allowLocalhost,
        configurePolicy =>
        {
            configurePolicy.WithOrigins("http://localhost:23809", "https://localhost:44363") 
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

var app = builder.Build();

await app.BootUmbracoAsync();

app.UseCors(allowLocalhost);

app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

await app.RunAsync();
