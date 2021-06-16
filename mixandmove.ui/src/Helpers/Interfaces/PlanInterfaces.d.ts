import { RouteComponentProps } from "react-router-dom";

declare module 'PlanTypes' {
    interface PlanProps {
        history: RouteComponentProps["history"]
    }
}

export { PlanProps }