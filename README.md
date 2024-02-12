# Portainer Service Webhook

[![GitHub Super-Linter](https://github.com/actions/javascript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/javascript-action/actions/workflows/ci.yml/badge.svg)

Portainer service webhook is a GitHub Action for updating a service on
Portainer. Action will pull the most up-to-date version of the associated image
and re-deploy a service. This will be useful when you have a continuous
deployment pipeline.

## Action Inputs

| Input       | Description                                                                                    | Default  |
| ----------- | ---------------------------------------------------------------------------------------------- | -------- |
| webhook_url | Service Webhook URL, eg. `https://portainer/api/webhooks/00000000-0000-0000-0000-000000000000` | Required |

## Example

Save the webhook URL using GitHub Secret.

```yaml
steps:
  - name: Update Service via Webhook
    uses: newarifrh/portainer-service-webhook@v1
    with:
      webhook_url: ${{ secrets.WEBHOOK_URL }}
```
