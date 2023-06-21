const mapDBAlbumsToModel = ({ id, name, year }) => ({
  id,
  name,
  year,
});

const mapDBSongToModel = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

const mapDBDetailSongToModel = ({ albumid, ...args }) => ({
  ...args,
  albumId: albumid,
});

module.exports = {
  mapDBAlbumsToModel,
  mapDBSongToModel,
  mapDBDetailSongToModel,
};
