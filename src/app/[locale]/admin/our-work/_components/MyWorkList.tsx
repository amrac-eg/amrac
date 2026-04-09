import { Ourwork, ImagemyWork } from "@prisma/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {   Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EditMywork from "./EditMywork";
import DeleteOurWork from "./DeleteOurWork";
import DeleteImageFromOurWork from "./DeleteImageFromOurWork";
// import DeleteImageFromOurWork from "./DeleteImageFromOurWork";

// Component for a single work item
const MyWorkItem = ({ ourwork }: { ourwork: Ourwork & { images?: ImagemyWork[] } }) => {
  return (
    <Card className="mb-6 w-full max-w-4xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-right">
              {ourwork.title_ar}
            </CardTitle>
            <CardTitle className="text-xl text-right">
              {ourwork.title_en}
            </CardTitle>
            <CardDescription>
              {new Date(ourwork.date).toLocaleDateString()}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <div >
              <EditMywork ourwork={ourwork} />
            </div>
            <Button variant="destructive" size="sm">
             <DeleteOurWork ourWork={ourwork} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">



        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-primary" />
               الصور الخاصه بالمشروع ({ourwork?.images?.length || 0})
            </h3>
 
          </div>

          {ourwork?.images?.length ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {ourwork.images.map((image) => (
                <div key={image.id} className="relative group">
                  <div className="aspect-square rounded-lg overflow-hidden border">
                    <Image
                      src={image.image}
                      alt={`${ourwork.title_ar || "Work"} - additional image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
                  >
                    <DeleteImageFromOurWork id_mywork={ourwork.id} id={image.id} publicId={image.publicId ?? ""} />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 border rounded-lg">
              <p className="text-muted-foreground">
                لا يوجد صور لهذا المشروع
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Component that handles the array of works
const MyWorkList = ({ ourworks }: { ourworks: (Ourwork & { images?: ImagemyWork[] })[] }) => {
  return (
    <div className="space-y-6">
      {ourworks.map((work) => (
        <MyWorkItem key={work.id} ourwork={work} />
      ))}
    </div>
  );
};

export default MyWorkList;