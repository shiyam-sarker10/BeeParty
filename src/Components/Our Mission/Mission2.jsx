import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const Mission2 = () => {
    return (
      <div className="w-[32rem]">
        <Timeline className="text-[#FEBF05] ">
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-[#FEBF05]" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none text-[#FEBF05]"
              >
                Lasting Smiles
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                Our goal is to bring lasting smiles to the faces of children by
                orchestrating birthday parties filled with laughter and wonder.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-[#FEBF05]" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none text-[#FEBF05]"
              >
                Personalized Perfection
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                We believe in the power of personalization, tailoring each
                birthday event to match the unique dreams and desires of our
                clients.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-[#FEBF05]" />
              <Typography
                variant="h6"
                color="blue-gray"
                className="leading-none text-[#FEBF05]"
              >
                Creating Magic
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gary"
                className="font-normal text-gray-600"
              >
                Our mission is to create magical moments that will be etched in
                the hearts of children, leaving them with cherished memories for
                a lifetime.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
};

export default Mission2;