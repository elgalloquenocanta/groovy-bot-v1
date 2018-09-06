import asyncpg

from utilities import logger


class PostgreClient:
    def __init__(self, user, password, database, host):
        self.user = user
        self.password = password
        self.database = database
        self.host = host
        self.conn = None

    async def connect(self):
        try:
            self.conn = await asyncpg.connect(user=self.user, password=self.password, database=self.database,
                                              host=self.host)
        except IOError as e:
            logger.error("[DATABASE] An error occurred while connecting to the DB", e)
            exit(1)

    def get_conn(self):
        return self.conn
