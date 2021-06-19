import { RouteComponentProps } from "react-router-dom";

declare module 'PlanTypes' {
    interface PlanProps {
        history: RouteComponentProps["history"],
        user: User,
    }
}

export { PlanProps }