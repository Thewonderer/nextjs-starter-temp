{% raw %}
export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>PayPal DevXP Demo App</h1>
      <p>App Name: {process.env.NEXT_PUBLIC_APP_NAME || 'demo-app'}</p>
      <p>Environment: {process.env.NEXT_PUBLIC_ENV || 'dev'}</p>
      <p>Deployed via Harness IDP + IaCM + CD</p>
      <p style={{ marginTop: '30px', color: '#00ADE4' }}>
        ✓ Infrastructure provisioned by IaCM<br/>
        ✓ Application deployed by Harness CD<br/>
        ✓ Self-service via IDP
      </p>
    </div>
  );
}
{% endraw %}
