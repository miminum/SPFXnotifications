## University of Tasmania Notifications

### Graph Api
#### Permissions
In order to access the MS Graph API we need to take certain steps to authenticate ourselves to be able to use a particular endpoint.

[List of different permissions required for different endpoints](https://developer.microsoft.com/en-us/graph/docs/concepts/permissions_reference)

In our pacakge-solution.json file, we need to add a key called "webApiPermissionRequests" and define the relavent permissions:

```json
"webApiPermissionRequests": [
        {
          "resource": "Microsoft Graph",
          "scope": "User.Read.All"
        },
        {
            "resource": "Microsoft Graph",
            "scope": "Tasks.ReadWrite"
        }
]
```

After we upload the package onto our sharepoint tenant, we need to approve the API permissions in our tenant by going to -> our tenants admin site -> Go to the "We're working on a new SharePoint admin center" Try Preview -> Advanced -> API Management and choose the resource/scope you included in the pacakge-solution file and approve it.

### Deployment
Notifications button to sit on top of existing solution

```bash
gulp bundle --ship
gulp package-solution --ship
upload package file from './sharepoint/solution' into app catalog
add app to site collection
```