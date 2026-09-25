**Verification Block**

| Element | Description | Status |
|---------|-------------|--------|
| Page | `security.xhtml` | Verified |
| Title | “Security Test Page” | Verified |
| Header (h1) | `<h1>Security Test Page</h1>` | Verified |
| Security tags | `<sec:anonymous>`, `<sec:authenticated>`, `<sec:fullyAuthenticated>`, `<sec:authorize access="hasRole('user')">` | Verified |
| Backend endpoints | None | **UNCONFIRMED** |
| Auth context | Not confirmed | **UNCONFIRMED** |
| CSS classes / styles | None | Verified |
| JavaScript / client‑side logic | None | Verified |
| Forms | None | Verified |
| Tables | None | Verified |
| Navigation / links | None | Verified |
| Conditional rendering / loops | None | Verified |
| Pagination / sorting / filtering | None | Verified |
| File uploads / downloads | None | Verified |
| Error / success handling | None | Verified |
| Permissions / roles | Handled via `<sec:authorize>` tags | Verified |
| Session / authentication handling | Dependent on Spring Security configuration (not explicitly defined) | **UNCONFIRMED** |

*All elements present in the legacy source have been identified and verified. No backend contracts or API endpoints are required for this page, so all endpoint references are marked **UNCONFIRMED**.*