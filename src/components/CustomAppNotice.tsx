// Apps that are not on the standard Atlantis ERP home screen (helpdesk, field
// service, payroll, manufacturing, deficiency tracking, subscriptions) are
// built on request. Their existing pages stay; this bar says so plainly.
import { Link, useLocation } from "react-router-dom";

const CUSTOM = /^\/erp\/(helpdesk|field-service|hr-payroll|manufacturing|deficiency-tracking|subscription-management)[-/]/;

export default function CustomAppNotice() {
  const { pathname } = useLocation();
  if (!CUSTOM.test(pathname)) return null;
  return (
    <div className="fixed top-20 inset-x-0 z-40 print:hidden">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900 shadow-sm flex flex-wrap items-center justify-between gap-2">
          <span>
            <strong>Custom-built app.</strong> Not part of the standard Atlantis ERP home screen — we build it to your requirements on request.
          </span>
          <span className="flex gap-4">
            <Link to="/erp/apps" className="font-semibold underline">Standard apps</Link>
            <Link
              to="/contact?service=erp&subject=Custom%20ERP%20app%20request"
              data-cta-variant="erp-custom-app-notice"
              className="font-semibold underline"
            >
              Request this app
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
