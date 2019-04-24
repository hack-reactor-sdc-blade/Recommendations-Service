CREATE TABLE recommendations(
  id serial NOT NULL,
  recImg varchar(255),
  recDetails varchar(255),
  recTitle varchar(255),
  recCost varchar(255),
  recRating varchar(255),
  recRatingCount varchar(255),
  roomId integer,
  CONSTRAINT persons_pkey PRIMARY KEY (id)
)

COPY recommendations(recImg, recDetails, recTitle, recCost, recRating, recRatingCount, roomId) 
FROM '/Users/VI/Desktop/Dev/hack-reactor/SDC/Recommendations-Service/dbs/SDC/out.csv' DELIMITER ',' CSV HEADER;