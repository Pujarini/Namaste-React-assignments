import { useParams } from "react-router-dom";

const WithRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

export default WithRouter;
