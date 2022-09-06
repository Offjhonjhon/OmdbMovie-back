-- CreateTable
CREATE TABLE "movies_note" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    "note" INTEGER NOT NULL,

    CONSTRAINT "movies_note_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movies_note" ADD CONSTRAINT "movies_note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
