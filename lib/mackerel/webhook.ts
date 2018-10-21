
export type MackerelWebhookRequest = {
  orgName: string,
  event: 'alert',
  host?: MackerelWebhookHostDefinition,
  service?: MackerelWebhookServiceDefinition,
  alert: MackerelWebhookAlertDefinition
}

export type MackerelWebhookHostDefinition = {
  id: string,
  name: string,
  url: string,
  status: string,
  memo: string,
  isRetired: boolean,
  roles?: MackerelWebhookRoleDefinition[]
}

export type MackerelWebhookServiceDefinition = {
  id: string,
  memo: string,
  name: string,
  orgId: string,
  roles?: MackerelWebhookRoleDefinition[]
}

export type MackerelWebhookRoleDefinition = {
  fullname: string,
  serviceName: string,
  serviceUrl: string,
  roleName: string,
  roleUrl: string
}

export type MackerelWebhookAlertDefinition = {
  status: 'ok' | 'warning' | 'critical' | 'unknown',
  isOpen: boolean,
  trigger: 'monitoring' | 'manual' | 'monitorDelete' | 'hostRetire',
  url: string,
  createdAt: number,
  monitorName?: string,
  metricLabel?: string,
  metricValue?: number,
  criticalThreshold?: number,
  warningThreshold?: number,
  monitorOperator?: '>' | '<',
  duration?: number
}
