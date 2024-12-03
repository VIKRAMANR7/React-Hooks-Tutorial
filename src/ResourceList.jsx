import { useEffect, useState } from "react";

const ResourceList = ({ resourceName }) => {
  const [resources, setResources] = useState([]);

  const fetchResources = async (resourceName) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    ).then((res) => res.json());
    setResources(response);
  };

  useEffect(() => {
    fetchResources(resourceName);
  }, [resourceName]);
  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
