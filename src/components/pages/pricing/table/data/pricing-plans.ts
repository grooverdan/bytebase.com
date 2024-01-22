import { Plan } from '@/types/pricing';
import Route from '@/lib/route';

const COLORS = {
  community: '#172136',
  pro: '#3DB8F5',
  enterprise: '#5647EB',
};

const PLANS: { free: Plan; pro: Plan; enterprise: Plan } = {
  free: {
    title: 'community',
    description: `Team essentials to manage database development lifecycle.`,
    buttonText: 'Deploy in 5 Minutes',
    buttonTheme: 'primary-outline',
    buttonUrl: '/docs/get-started/self-host/#docker',
    changeManagement: {
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      changelist: true,
      branching: true,
      'change-history': true,
      terraform: true,
      schedule: false,
      'rollout-policy': { value: 'Basic', tooltip: 'Automatic' },
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
      batch: false,
      connection: false,
      chat: false,
    },
    collaboration: {
      inbox: true,
      ui: true,
      shared: false,
      webhook: { value: 'Basic', tooltip: 'IM + Custom Webhook' },
      gitops: { value: 'Basic', tooltip: 'GitOps CI/CD, SQL Review CI' },
    },
    security: {
      rbac: true,
      'slow-query': true,
      archiving: true,
      'backup-policy': false,
      'secret-variable': false,
      'secret-manager': false,
      sso: false,
      twofa: false,
      ssh: false,
      'query-and-export-workflow': false,
      environment: false,
      masking: false,
      'access-control': false,
      watermark: false,
      'audit-log': false,
      'signup-restriction': false,
      'signin-frequency': false,
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
    description: 'More policies to standardize and facilitate collaboration across teams.',
    buttonText: 'Buy Now',
    buttonTheme: 'primary-outline',
    buttonUrl: Route.PRO_PAYMENT,
    additionalDescription: 'Annual subscription, cancel anytime',
    changeManagement: {
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      changelist: true,
      branching: true,
      'change-history': true,
      terraform: true,
      schedule: true,
      'rollout-policy': { value: 'Advanced', tooltip: 'Automatic + Manual Review' },
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
      batch: false,
      connection: false,
      chat: false,
    },
    collaboration: {
      inbox: true,
      ui: true,
      shared: true,
      webhook: { value: 'Basic', tooltip: 'IM + Custom Webhook' },
      gitops: {
        value: 'Advanced',
        tooltip: 'Basic + Latest Schema Write-back, SQL Scripts Sync, SQL Review CI',
      },
    },
    security: {
      rbac: true,
      'slow-query': true,
      archiving: true,
      'backup-policy': true,
      'secret-variable': true,
      'secret-manager': false,
      sso: false,
      twofa: false,
      ssh: false,
      'query-and-export-workflow': false,
      environment: false,
      masking: false,
      'access-control': false,
      watermark: false,
      'audit-log': false,
      'signup-restriction': false,
      'signin-frequency': false,
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
    description: 'Extra security, compliance, and permission features. Dedicated support with SLA.',
    buttonText: 'Contact Us',
    buttonTheme: 'primary-filled',
    buttonUrl: '/contact-us',
    additionalDescription: 'Free trial for 14 days',
    changeManagement: {
      'state-based-change': true,
      'migration-based-change': true,
      'sql-check': true,
      changelist: true,
      branching: true,
      'change-history': true,
      terraform: true,
      schedule: true,
      'rollout-policy': { value: 'Advanced', tooltip: 'Automatic + Manual Review' },
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
      batch: true,
      connection: true,
      chat: true,
    },
    collaboration: {
      inbox: true,
      ui: true,
      shared: true,
      webhook: { value: 'Advanced', tooltip: 'Basic + IM Approval' },
      gitops: {
        value: 'Advanced',
        tooltip: 'Basic + Latest Schema Write-back, SQL Scripts Sync, SQL Review CI',
      },
    },
    security: {
      rbac: true,
      'slow-query': true,
      archiving: true,
      'backup-policy': true,
      'secret-variable': true,
      'secret-manager': true,
      sso: true,
      twofa: true,
      ssh: true,
      'query-and-export-workflow': true,
      environment: true,
      masking: true,
      'access-control': true,
      watermark: true,
      'audit-log': true,
      'signup-restriction': true,
      'signin-frequency': true,
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
      'state-based-change': 'State-based change',
      'migration-based-change': 'Migration-based change',
      'sql-check': '100+ Automated SQL check',
      changelist: 'Changelist',
      branching: 'Branching',
      'change-history': 'Change history',
      terraform: 'Terraform integration',
      schedule: 'Scheduled change at specific time',
      'rollout-policy': 'Rollout Policy',
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
      csv: 'SQL / CSV / JSON / XML export',
      admin: 'Admin Mode',
      script: 'Saved SQL script',
      batch: 'Batch query multiple databases',
      connection: 'Separate connection for read-only operations',
      chat: 'Query using natural language',
    },
  },
  {
    title: 'Collaboration',
    items: {
      inbox: 'Inbox notification',
      ui: 'UI based SQL review',
      shared: 'Shared SQL script',
      webhook: 'Webhook integration',
      gitops: 'GitOps workflow',
    },
  },
  {
    title: 'Data Security & Governance',
    items: {
      rbac: 'RBAC',
      'slow-query': 'Slow Query',
      archiving: 'Archiving',
      'backup-policy': 'Backup policy',
      'secret-variable': 'Secret variable',
      'secret-manager': 'External secret manager',
      sso: 'Single Sign-On (SSO)',
      twofa: 'Two-Factor Authentication (2FA)',
      ssh: 'SSH Tunnel',
      'query-and-export-workflow': 'Query and export approval workflow',
      environment: 'Environment tier',
      masking: 'Sensitive data masking',
      'access-control': 'Data access control',
      watermark: 'Watermark',
      'audit-log': 'Audit log',
      'signup-restriction': 'Sign-up restriction',
      'signin-frequency': 'Sign-in frequency',
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
