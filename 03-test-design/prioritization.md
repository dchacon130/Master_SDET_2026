# 03-test-design/prioritization.md

1. **`standard_user` compra la mochila hasta "Thank you for your order!".**
   Ocupa el primer puesto porque es el flujo principal (happy path) y el núcleo del negocio; si una compra normal falla, no se puede lanzar el release.

2. **`error_user` no puede terminar la compra.**
   Ocupa el segundo puesto porque evalúa un defecto bloqueante conocido en la etapa de pago, el cual tiene un impacto crítico y directo en la facturación.

3. **`locked_out_user` intenta iniciar sesión.**
   Ocupa el tercer puesto porque valida una regla de negocio y de seguridad fundamental en el punto de entrada a la aplicación, evitando accesos no autorizados.