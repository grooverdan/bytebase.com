import { Plan } from '@/types/pricing';

const COLORS = { pro: '#5647EB', free: '#3DB8F5', enterprise: '#172136' };

const PLANS: { free: Plan; pro: Plan; enterprise: Plan } = {
  free: {
    title: 'free',
    description: `Team essentials to centralize database development lifecycle management`,
    buttonText: 'Free Deploy',
    buttonTheme: 'primary-outline',
    buttonUrl: '/docs/get-started/self-host/#docker',
    changeManagement: {
      user: 'Up to 20',
      environment: 'Unlimited',
      instance: 'Up to 20',
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      'change-history': true,
      terraform: true,
      schedule: false,
      'disaster-recovery': { value: 'Basic', tooltip: 'Data backup / restore' },
      synchronize: { value: 'Basic', tooltip: 'Sync from the latest schema version' },
      'batch-change': { value: 'Basic', tooltip: 'Multi-environment change' },
      'custom-approval': false,
    },
    sql: {
      'auto-complete': true,
      'schema editor': true,
      'schema-diagram': true,
      csv: true,
      admin: true,
      script: true,
      connection: false,
    },
    collaboration: {
      inbox: true,
      ui: true,
      shared: false,
      gitops: { value: 'Basic', tooltip: 'GitOps CI/CD, SQL Review CI' },
      webhook: { value: 'Basic', tooltip: 'IM + Custom Webhook' },
    },
    security: {
      rbac: true,
      'slow-query': true,
      archiving: true,
      'approval-backup-policy': false,
      sso: false,
      twofa: false,
      'query-and-export-workflow': false,
      dba: false,
      environment: false,
      masking: false,
      'access-control': false,
      watermark: false,
      'audit-log': false,
      'signup-restriction': false,
      anomaly: { value: 'Basic', tooltip: 'Connection failure, missing backup' },
    },
    bespoke: {
      support: 'Community',
      logo: false,
      roadmap: false,
      msa: false,
    },
  },
  pro: {
    title: 'pro',
    description:
      'More collaboration and control policies for advanced database development lifecycle management',
    buttonText: 'Try Free now',
    buttonTheme: 'primary-filled',
    buttonUrl:
      'https://bytebase-hub-prod.us.auth0.com/u/login?state=hKFo2SByU1VxQzVzb0JpSm01TjF5TjZmU1JoTTVndXNpU3FuY6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIF9JakVqd1RRaVBjczh0NTVEQmxqSHo3ZGxzWV9zelBUo2NpZNkgN0IySDFrb05Sa3hQY0pENzBHeVJEbzVIbVNNMGI5V1E',
    additionalDescription: 'Free trial for 14 days.',
    changeManagement: {
      user: 'Unlimited',
      environment: 'Unlimited',
      instance: {
        value: 'Up to 20',
        tooltip: 'Maximum 20. Talk to us for pricing if your instances go over the limit.',
      },
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      'change-history': true,
      terraform: true,
      schedule: true,
      'disaster-recovery': {
        value: 'Advanced',
        tooltip: 'Basic + Point-in-Time-Recovery (PITR)',
      },
      synchronize: { value: 'Advanced', tooltip: 'Sync from arbitrary schema version' },
      'batch-change': { value: 'Basic', tooltip: 'Multi-environment change' },
      'custom-approval': false,
    },
    sql: {
      'auto-complete': true,
      'schema editor': true,
      'schema-diagram': true,
      csv: true,
      admin: true,
      script: true,
      connection: false,
    },
    collaboration: {
      inbox: true,
      ui: true,
      shared: true,
      gitops: {
        value: 'Advanced',
        tooltip: 'Basic + Latest Schema Write-back, SQL Scripts Sync, SQL Review CI',
      },
      webhook: { value: 'Basic', tooltip: 'IM + Custom Webhook' },
    },
    security: {
      rbac: true,
      'slow-query': true,
      archiving: true,
      'approval-backup-policy': true,
      sso: false,
      twofa: false,
      'query-and-export-workflow': false,
      dba: false,
      environment: false,
      masking: false,
      'access-control': false,
      watermark: false,
      'audit-log': false,
      'signup-restriction': false,
      anomaly: { value: 'Basic', tooltip: 'Connection failure, missing backup' },
    },
    bespoke: {
      support: 'Email',
      logo: false,
      roadmap: false,
      msa: false,
    },
  },
  enterprise: {
    title: 'enterprise',
    description: 'Holistic database development lifecycle management for the entire organization',
    buttonText: 'Contact us',
    buttonTheme: 'primary-outline',
    buttonUrl: '/contact-us',
    changeManagement: {
      user: 'Unlimited',
      environment: 'Unlimited',
      instance: 'Unlimited',
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      'change-history': true,
      terraform: true,
      schedule: true,
      'disaster-recovery': {
        value: 'Advanced',
        tooltip: 'Basic + Point-in-Time-Recovery (PITR)',
      },
      synchronize: { value: 'Advanced', tooltip: 'Sync from arbitrary schema version' },
      'batch-change': {
        value: 'Advanced',
        tooltip: 'Multi-environment + Multi-region / Multi-tenancy change',
      },
      'custom-approval': true,
    },
    sql: {
      'auto-complete': true,
      'schema editor': true,
      'schema-diagram': true,
      csv: true,
      admin: true,
      script: true,
      connection: true,
    },
    collaboration: {
      inbox: true,
      ui: true,
      shared: true,
      gitops: {
        value: 'Advanced',
        tooltip: 'Basic + Latest Schema Write-back, SQL Scripts Sync, SQL Review CI',
      },
      webhook: { value: 'Advanced', tooltip: 'Basic + IM Approval' },
    },
    security: {
      rbac: true,
      'slow-query': true,
      archiving: true,
      'approval-backup-policy': true,
      sso: true,
      twofa: true,
      'query-and-export-workflow': true,
      dba: true,
      environment: true,
      masking: true,
      'access-control': true,
      watermark: true,
      'audit-log': true,
      'signup-restriction': true,
      anomaly: { value: 'Advanced', tooltip: 'Basic + Schema drift detection' },
    },
    bespoke: {
      support: 'Dedicated line with SLA',
      logo: true,
      roadmap: true,
      msa: true,
    },
  },
};

const LABELS = [
  {
    title: 'Change Management',
    items: {
      user: 'User count',
      environment: 'Environment count',
      instance: 'Instance count',
      'state-based-change': 'State-based change',
      'migration-based-change': 'Migration-based change',
      'sql-check': '100+ Automated SQL check',
      'change-history': 'Change history',
      terraform: 'Terraform integration',
      schedule: 'Scheduled change at specific time',
      'disaster-recovery': 'Disaster recovery',
      synchronize: 'Synchronize schema between databases',
      'batch-change': 'Batch change',
      'custom-approval': 'Custom approval workflow',
    },
  },
  {
    title: 'SQL Editor',
    items: {
      'auto-complete': 'Auto complete',
      'schema editor': 'Schema editor',
      'schema-diagram': 'Schema diagram',
      csv: 'CSV / JSON export',
      admin: 'Admin Mode',
      script: 'Saved SQL script',
      connection: 'Separate connection for read-only operations',
    },
  },
  {
    title: 'Collaboration',
    items: {
      inbox: 'Inbox notification',
      ui: 'UI based SQL review',
      shared: 'Shared SQL script',
      gitops: 'GitOps workflow',
      webhook: 'Webhook integration',
    },
  },
  {
    title: 'Data Security & Governance',
    items: {
      rbac: 'RBAC (Owner, DBA, Developer role)',
      'slow-query': 'Slow Query',
      archiving: 'Archiving',
      'approval-backup-policy': 'Approval and backup policy',
      sso: 'Single Sign-On (SSO)',
      twofa: 'Two-Factor Authentication (2FA)',
      'query-and-export-workflow': 'Query and export approval workflow',
      dba: 'DBA workflow',
      environment: 'Environment tier',
      masking: 'Sensitive data masking',
      'access-control': 'Data access control',
      watermark: 'Watermark',
      'audit-log': 'Audit log',
      'signup-restriction': 'Signup restriction',
      anomaly: 'Anomaly detection',
    },
  },
  {
    title: 'Bespoke',
    items: {
      support: 'Support',
      logo: 'Custom logo',
      roadmap: 'Roadmap prioritization',
      msa: 'Custom MSA',
    },
  },
];

export { PLANS, LABELS, COLORS };
